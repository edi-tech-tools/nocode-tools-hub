#!/usr/bin/env python3
"""Daily update: refine unrefined tools, add blog post, update sitemap"""
import json
import re
import os
import sys
import requests
from datetime import datetime

# Configuration
QWEN_API_KEY = os.environ.get('QWEN_API_KEY_1', '')
if not QWEN_API_KEY:
    # Read from env file
    with open('/home/edi/.hermes/api_keys.env', 'r') as f:
        for line in f:
            if line.startswith('QWEN_API_KEY_1='):
                QWEN_API_KEY = line.strip().split('=', 1)[1]
                break

BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"
MODEL = "qwen-plus"

if not QWEN_API_KEY:
    print("ERROR: QWEN_API_KEY_1 not found")
    sys.exit(1)

TOOLS_PATH = '/home/edi/nocode-tool-hub/app/data/tools.ts'
BLOGS_PATH = '/home/edi/nocode-tool-hub/app/data/blog-posts.ts'
SITEMAP_PATH = '/home/edi/nocode-tool-hub/app/sitemap.xml/route.ts'

def call_qwen(messages, max_tokens=4096):
    """Call Qwen API with messages"""
    headers = {
        "Authorization": f"Bearer {QWEN_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": MODEL,
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.7
    }
    resp = requests.post(f"{BASE_URL}/chat/completions", headers=headers, json=payload, timeout=120)
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]

def get_current_tools():
    """Parse tools.ts and return list of tool IDs and their longDescriptions"""
    with open(TOOLS_PATH, 'r') as f:
        content = f.read()
    
    tools = []
    # Find all tool entries: { id: "...", ... longDescription: "...", ... }
    # Split by id: pattern
    pattern = r'id:\s*"([^"]+)"'
    ids = re.findall(pattern, content)
    
    # Find all longDescriptions
    ld_pattern = re.compile(r'longDescription:\s*(`([^`]*)`|"([^"]*)")')
    ld_matches = ld_pattern.findall(content)
    
    print(f"Found {len(ids)} tools")
    
    # Match each tool with its longDescription
    # Re-scan with proper pairing
    tool_entries = re.findall(
        r'id:\s*"([^"]+)".*?longDescription:\s*(`([^`]*)`|"([^"]*)")',
        content,
        re.DOTALL
    )
    
    # Actually let's do it properly by iterating through all entries
    entries = []
    idx = 0
    for m in re.finditer(r'id:\s*"([^"]+)"', content):
        tool_id = m.group(1)
        start = m.start()
        entries.append((start, tool_id))
    
    entries.sort()
    
    for i, (pos, tool_id) in enumerate(entries):
        end = entries[i+1][0] if i+1 < len(entries) else len(content)
        block = content[pos:end]
        
        ld_match = re.search(r'longDescription:\s*(`([^`]*)`|"([^"]*)"|`([^`]*)`)', block)
        if ld_match:
            long_desc = ld_match.group(2) or ld_match.group(3) or ld_match.group(4) or ''
        else:
            long_desc = ''
        
        tools.append({
            'id': tool_id,
            'longDescription': long_desc,
            'pos': pos,
            'block_len': end - pos
        })
    
    return tools, content

def is_refined(long_desc):
    """Check if a longDescription is refined (has substantial content)"""
    if not long_desc:
        return False
    # Refined descriptions are typically 300+ chars with detailed content
    return len(long_desc) > 300

def find_unrefined(tools):
    """Find unrefined tools"""
    unrefined = []
    for t in tools:
        if not is_refined(t['longDescription']):
            unrefined.append(t)
    return unrefined

def refine_tool_via_api(tool_id, tool_name, original_desc, category):
    """Call Qwen API to refine a tool's longDescription"""
    prompt = f"""You are a no-code/low-code expert writing comprehensive tool descriptions for a comparison website called "nocode-tools.net".

Write a detailed, long-form description for the no-code tool "{tool_name}" (category: {category}) that is informative, engaging, and SEO-optimized. The description should:

1. Start with what the tool is and its position in the market
2. Detail 3-5 key features with specific capabilities
3. Include 3-5 pros (strengths, unique advantages)
4. Include 2-4 cons (limitations, trade-offs)
5. End with ideal use case / who it's best for

Current brief description: {original_desc}

Write in a professional but accessible tone. Aim for 500-800 characters. Use proper Markdown formatting but keep it as a single paragraph (no line breaks). Use ONLY standard ASCII characters - no smart quotes, no em dashes. Do NOT use backticks or dollar-brace patterns."""
    
    messages = [
        {"role": "system", "content": "You are a no-code/low-code expert writing comprehensive, detailed tool descriptions for a comparison website. Write in clear, professional English. Use only ASCII characters."},
        {"role": "user", "content": prompt}
    ]
    
    result = call_qwen(messages)
    return result.strip()

def generate_blog_post():
    """Generate a high-quality blog post about no-code/low-code topics"""
    prompt = """Write a comprehensive blog post for a no-code/low-code comparison website called "nocode-tools.net" (domain: nocode-tools.net).

Title: "Airtable vs NocoDB vs Rowy: No-Code Database Platforms Compared in 2026"

Blog post must:
1. Be substantive (1500-2500 words)
2. Start with a compelling intro about the no-code database landscape in 2026
3. Cover Airtable, NocoDB, and Rowy in detail with:
   - What each tool is and its unique positioning
   - 5-7 specific features per tool
   - Pros and cons
   - Pricing overview
   - Best use cases
4. Include a comparison section or table
5. End with a decision framework / conclusion
6. Use Markdown formatting (headings with ##, **bold**, bullet points)
7. Use ONLY standard ASCII characters - NO smart quotes, NO em dashes, NO special Unicode
8. Replace any use of backtick character with single quote '
9. Do NOT use ${} patterns anywhere
10. Sound authoritative, well-researched, and genuinely helpful

Include the exact URL: https://nocode-tools.net in one natural mention."""
    
    messages = [
        {"role": "system", "content": "You are a senior no-code/low-code industry analyst writing expert blog content. Write in clear, authoritative English. Use ONLY standard ASCII characters. Replace any backticks with single quotes."},
        {"role": "user", "content": prompt}
    ]
    
    result = call_qwen(messages, max_tokens=8192)
    
    # Clean up: replace any backticks with single quotes
    result = result.replace('`', "'")
    # Ensure no ${} patterns
    result = result.replace('${', '$''{')
    # Replace smart quotes with straight quotes
    result = result.replace('\u2018', "'").replace('\u2019', "'")
    result = result.replace('\u201c', '"').replace('\u201d', '"')
    result = result.replace('\u2013', '--').replace('\u2014', '---')
    result = result.replace('\u00a0', ' ')
    
    return result.strip()

def update_tool_long_description(tool_id, new_long_desc, content):
    """Update a tool's longDescription in the tools.ts content"""
    # Escape for safe insertion
    escaped = new_long_desc.replace('\\', '\\\\').replace('"', '\\"')
    
    # Find the tool entry by id
    id_pattern = f'id: "{tool_id}"'
    match = re.search(id_pattern, content)
    if not match:
        print(f"  ERROR: Could not find tool {tool_id}")
        return content
    
    # Find the opening brace
    start_idx = match.start()
    brace_pos = content.rfind('{', 0, start_idx)
    if brace_pos < 0:
        print(f"  ERROR: Could not find opening brace for {tool_id}")
        return content
    
    # Find the matching closing brace
    depth = 1
    end_idx = brace_pos + 1
    while depth > 0 and end_idx < len(content):
        if content[end_idx] == '{':
            depth += 1
        elif content[end_idx] == '}':
            depth -= 1
        end_idx += 1
    
    tool_entry = content[brace_pos:end_idx]
    
    # Try to find longDescription field
    ld_pattern = re.compile(r'(longDescription:\s*)"(?:[^"]*)"')
    ld_match = ld_pattern.search(tool_entry)
    
    if ld_match:
        full_match = ld_match.group(0)
        ld_prefix = ld_match.group(1)
        new_field = f'{ld_prefix}"{escaped}"'
        before = content[:brace_pos]
        after = content[end_idx:]
        new_entry = tool_entry.replace(full_match, new_field, 1)
        content = before + new_entry + after
        print(f"  OK Updated {tool_id} (double-quoted, {len(new_long_desc)} chars)")
        return content
    
    # Try backtick-quoted
    ld_pattern2 = re.compile(r'(longDescription:\s*)`(?:[^`]*)`')
    ld_match2 = ld_pattern2.search(tool_entry)
    
    if ld_match2:
        full_match = ld_match2.group(0)
        ld_prefix = ld_match2.group(1)
        new_field = f'{ld_prefix}"{escaped}"'
        before = content[:brace_pos]
        after = content[end_idx:]
        new_entry = tool_entry.replace(full_match, new_field, 1)
        content = before + new_entry + after
        print(f"  OK Updated {tool_id} (was backtick-quoted, {len(new_long_desc)} chars)")
        return content
    
    print(f"  ERROR: Could not find longDescription field for {tool_id}")
    return content

def add_blog_post(blog_content, blogs_path):
    """Add a blog post entry to blog-posts.ts"""
    with open(blogs_path, 'r') as f:
        content = f.read()
    
    slug = "airtable-vs-nocodb-vs-rowy-2026"
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Escape blog content for backtick template literal
    escaped = blog_content.replace('\\', '\\\\')
    escaped = escaped.replace('`', '\\`')
    escaped = escaped.replace('${', '\\${')
    
    # Build the new entry using Python list concatenation
    lines = []
    lines.append('  {')
    lines.append('    slug: "' + slug + '",')
    lines.append('    title: "Airtable vs NocoDB vs Rowy: No-Code Database Platforms Compared in 2026",')
    lines.append('    excerpt: "A comprehensive comparison of Airtable, NocoDB, and Rowy \\u2014 the three leading no-code database platforms in 2026. Compare features, pricing, pros and cons, and find the best fit for your team.",')
    lines.append('    content: `' + escaped + '`,')
    lines.append('    author: "Alex Chen",')
    lines.append('    authorRole: "NoCode Expert",')
    lines.append('    date: "' + today + '",')
    lines.append('    category: "Database & Backend",')
    lines.append('    readTime: 9,')
    lines.append('    tags: ["Airtable", "NocoDB", "Rowy", "Database", "No-Code", "Backend", "2026", "Open Source", "Comparison"],')
    lines.append('  },')
    
    new_entry_str = '\n'.join(lines)
    
    # Find the closing ]; of the array
    insert_pos = content.rfind('\n];')
    if insert_pos > 0:
        before = content[:insert_pos]
        before_end = before.rstrip()
        
        if before_end.endswith(','):
            pass
        elif before_end.endswith('}'):
            last_brace = before_end.rfind('}')
            before = before_end[:last_brace+1] + ',' + before_end[last_brace+1:]
        
        content = before + '\n' + new_entry_str
    else:
        insert_pos = content.rfind('];')
        if insert_pos > 0:
            before = content[:insert_pos]
            before_end = before.rstrip()
            if before_end.endswith(','):
                pass
            elif before_end.endswith('}'):
                last_brace = before_end.rfind('}')
                before = before_end[:last_brace+1] + ',' + before_end[last_brace+1:]
            content = before + '\n' + new_entry_str
    
    with open(blogs_path, 'w') as f:
        f.write(content)
    
    print("OK Blog post '" + slug + "' added to blog-posts.ts")
    return slug

def update_sitemap(slug, sitemap_path):
    """Add blog slug to sitemap BLOG_SLUGS"""
    with open(sitemap_path, 'r') as f:
        content = f.read()
    
    if 'BLOG_SLUGS' in content:
        blog_slugs_start = content.find('BLOG_SLUGS')
        bracket_open = content.find('[', blog_slugs_start)
        if bracket_open >= 0:
            bracket_close = content.find('];', bracket_open)
            if bracket_close >= 0:
                # Check if slug already exists
                if '"' + slug + '"' in content[bracket_open:bracket_close]:
                    print("  Slug already in BLOG_SLUGS, skipping")
                    return
                
                arr_content = content[bracket_open:bracket_close+2]
                last_comma = arr_content.rfind(',', 0, arr_content.rfind('];'))
                if last_comma >= 0:
                    insert_at = bracket_open + last_comma + 1
                    content = content[:insert_at] + '\n    "' + slug + '",' + content[insert_at:]
                else:
                    insert_at = bracket_open + 1
                    content = content[:insert_at] + '\n    "' + slug + '",' + content[insert_at:]
                
                with open(sitemap_path, 'w') as f:
                    f.write(content)
                print("  OK Added '" + slug + "' to BLOG_SLUGS in sitemap")
                return
    
    print("  Could not find BLOG_SLUGS in sitemap")

def main():
    print("=" * 60)
    print("Daily Update: Nocode-Tool-Hub")
    print("Date:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 60)
    
    # Step 1: Scan tools
    print("\n--- Step 1: Scanning tools.ts ---")
    tools, content = get_current_tools()
    
    unrefined = find_unrefined(tools)
    print(f"\nRefined tools: {len(tools) - len(unrefined)}/{len(tools)}")
    print(f"Unrefined tools: {len(unrefined)}")
    
    if unrefined:
        print("\nUnrefined tools:")
        for t in unrefined[:10]:
            print(f"  - {t['id']} ({len(t['longDescription'])} chars)")
    
    # Step 2: Refine tools (up to 3)
    print("\n--- Step 2: Refining tools via Qwen API ---")
    tools_to_refine = unrefined[:3]
    
    if not tools_to_refine:
        print("No unrefined tools found. Skipping refinement.")
    else:
        for t in tools_to_refine:
            tool_id = t['id']
            # Get name from the original content
            name_match = re.search(r'id:\s*"' + re.escape(tool_id) + r'"[^}]*name:\s*"([^"]+)"', content)
            tool_name = name_match.group(1) if name_match else tool_id
            
            # Get category
            cat_match = re.search(r'id:\s*"' + re.escape(tool_id) + r'"[^}]*category:\s*"([^"]+)"', content)
            category = cat_match.group(1) if cat_match else "General"
            
            print(f"\nRefining {tool_name} ({tool_id})...")
            try:
                new_desc = refine_tool_via_api(tool_id, tool_name, t['longDescription'], category)
                print(f"  Generated {len(new_desc)} chars")
                content = update_tool_long_description(tool_id, new_desc, content)
            except Exception as e:
                print(f"  Error refining {tool_id}: {e}")
        
        # Write updated tools.ts
        with open(TOOLS_PATH, 'w') as f:
            f.write(content)
        print("\nOK tools.ts written")
    
    # Step 3: Generate blog post
    print("\n--- Step 3: Generating blog post ---")
    try:
        blog_content = generate_blog_post()
        print(f"  Generated {len(blog_content)} chars of blog content")
        slug = add_blog_post(blog_content, BLOGS_PATH)
    except Exception as e:
        print(f"  Error generating blog post: {e}")
        slug = None
    
    # Step 4: Update sitemap
    print("\n--- Step 4: Updating sitemap ---")
    if slug:
        update_sitemap(slug, SITEMAP_PATH)
    
    print("\n" + "=" * 60)
    print("Daily update script completed successfully!")
    print("=" * 60)

if __name__ == "__main__":
    main()
