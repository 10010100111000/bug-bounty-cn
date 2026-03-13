// app/methodology/components/ReportTemplates.tsx
export default function ReportTemplates() {
  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">报告模板</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          使用这些模板作为编写报告的起点。根据漏洞类型和项目进行调整。
        </p>
      </div>

      <div className="space-y-8">
        {/* XSS报告模板 */}
        <ReportTemplateCard
          title="XSS报告模板"
          content={`## Title
[HIGH] Stored XSS in User Profile Bio Field

## Summary
A stored Cross-Site Scripting (XSS) vulnerability exists in the user profile biography field at https://target.com/settings/profile. An attacker can inject malicious JavaScript that executes in the context of any user viewing the attacker's profile.

## Vulnerability Details
- **Type**: Stored XSS (CWE-79)
- **Affected URL**: https://target.com/settings/profile
- **Affected Parameter**: bio (POST body)
- **Payload**: <img src=x onerror=alert(document.cookie)>

## Steps to Reproduce
1. Log in to https://target.com with attacker account
2. Navigate to Settings > Profile
3. In the "Bio" field, enter: <img src=x onerror=alert(document.cookie)>
4. Click "Save Profile"
5. Visit the attacker's profile page from a different account
6. Observe the JavaScript alert with the victim's cookies

## Impact
An attacker can steal session cookies, perform actions on behalf of the victim, redirect users to malicious sites, or deface the page. This affects all users who view the attacker's profile.

## CVSS Score: 7.1 (High)
AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N

## Suggested Fix
- Implement proper output encoding/escaping for user-generated content
- Use Content-Security-Policy headers to prevent inline script execution
- Sanitize input using a whitelist approach`}
        />

        {/* IDOR报告模板 */}
        <ReportTemplateCard
          title="IDOR报告模板"
          content={`## Title
[CRITICAL] IDOR in /api/v1/users/{id}/documents - Access to Any User's Documents

## Summary
An Insecure Direct Object Reference (IDOR) vulnerability in the documents API endpoint allows any authenticated user to access, modify, or delete documents belonging to other users by manipulating the user ID parameter.

## Vulnerability Details
- **Type**: IDOR / Broken Access Control (CWE-639)
- **Affected Endpoint**: GET/PUT/DELETE /api/v1/users/{id}/documents
- **Authentication**: Required (any authenticated user)

## Steps to Reproduce
1. Create two accounts: Account A (ID: 1001) and Account B (ID: 1002)
2. Upload a document using Account A
3. Note the document endpoint: GET /api/v1/users/1001/documents/doc_123
4. Switch to Account B
5. Send: GET /api/v1/users/1001/documents/doc_123 with Account B's token
6. Observe: Account B can access Account A's document

## Impact
Any authenticated user can access all documents of any other user, including potentially sensitive personal, financial, or medical documents. This is a complete bypass of the authorization model.

## CVSS Score: 8.6 (High)
AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

## Suggested Fix
- Implement server-side authorization checks on every request
- Verify that the authenticated user owns the requested resource
- Use indirect reference maps instead of direct database IDs`}
        />

        {/* SSRF报告模板 */}
        <ReportTemplateCard
          title="SSRF报告模板"
          content={`## Title
[HIGH] SSRF via URL Preview Feature - Access to Internal Services

## Summary
A Server-Side Request Forgery (SSRF) vulnerability exists in the URL preview feature. An attacker can make the server send requests to internal services, including AWS metadata endpoint, potentially exposing sensitive credentials.

## Vulnerability Details
- **Type**: SSRF (CWE-918)
- **Affected Endpoint**: POST /api/v1/preview
- **Affected Parameter**: url (JSON body)

## Steps to Reproduce
1. Log in to the application
2. Send the following request:
   POST /api/v1/preview
   Content-Type: application/json
   {"url": "http://169.254.169.254/latest/meta-data/iam/security-credentials/"}
3. Observe: The response contains the IAM role name
4. Follow up with the role name to get temporary credentials

## Impact
An attacker can access internal services not meant to be publicly accessible, including cloud metadata endpoints. This could lead to credential theft, internal network scanning, and potential full infrastructure compromise.

## CVSS Score: 8.2 (High)
AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:N/A:N

## Suggested Fix
- Implement a URL allowlist for the preview feature
- Block requests to private IP ranges and cloud metadata endpoints
- Use a separate network-isolated service for URL fetching
- Validate and sanitize user-supplied URLs`}
        />
      </div>
    </section>
  );
}

function ReportTemplateCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      <div className="bg-[#fafafa] rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm whitespace-pre-wrap break-all text-[#666]">
          {content}
        </pre>
      </div>
    </div>
  );
}