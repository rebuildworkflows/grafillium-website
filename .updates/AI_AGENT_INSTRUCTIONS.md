# AI AGENT INSTRUCTIONS - Grafillium Founder Profile Updates

## TASK
Update founder profile subtitles in Grafillium website to match Nexerg's correct format.

---

## EXACT TOOL CALLS TO EXECUTE

### EDIT 1: Vikas Jain Subtitle

**Tool:** Edit
**File Path:** `C:\Users\globql-ws\Documents\project-sushant\grafillium-website\src\data\about.js`

**Parameters:**
```json
{
  "file_path": "C:\\Users\\globql-ws\\Documents\\project-sushant\\grafillium-website\\src\\data\\about.js",
  "old_string": "                subtitle: \"CEO & Chief Manufacturing Officer\",",
  "new_string": "                subtitle: \"Chief Executive and Manufacturing Officer\",",
  "replace_all": false
}
```

---

### EDIT 2: Ishat Jain Subtitle

**Tool:** Edit
**File Path:** `C:\Users\globql-ws\Documents\project-sushant\grafillium-website\src\data\about.js`

**Parameters:**
```json
{
  "file_path": "C:\\Users\\globql-ws\\Documents\\project-sushant\\grafillium-website\\src\\data\\about.js",
  "old_string": "                subtitle: \"Business Operations & Digital Growth\",",
  "new_string": "                subtitle: \"Chief Business Development Officer\",",
  "replace_all": false
}
```

---

## VERIFICATION STEPS

After executing both edits, read the file to verify:

**Tool:** Read
**File Path:** `C:\Users\globql-ws\Documents\project-sushant\grafillium-website\src\data\about.js`
**Offset:** 150
**Limit:** 50

Expected output should show:
- Line ~155: `subtitle: "Chief Executive and Manufacturing Officer",`
- Line ~176: `subtitle: "Chief Business Development Officer",`

---

## CONTEXT

These updates align Grafillium website founder profiles with the verified correct format used in Nexerg website. Only subtitle fields for Vikas Jain and Ishat Jain need updates. All other profile data remains unchanged.

---

## SUCCESS CRITERIA

✓ Vikas Jain subtitle: "Chief Executive and Manufacturing Officer"
✓ Ishat Jain subtitle: "Chief Business Development Officer"
✓ No syntax errors
✓ File successfully saved
✓ All other founder data unchanged

---

**Status:** Ready for execution
**Priority:** Medium
**Estimated Execution Time:** 2 minutes
