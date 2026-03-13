// app/reports/sections/examples/page.tsx
'use client';

import React from 'react';
import Accordion from '@/components/ui/Accordion';

export default function ReportExamples() {
  // 1:1还原原页面的真实报告案例，标题布局对齐原页面，内容结构完全贴合赏金平台标准
  const realReportCases = [
    {
      id: 'xss-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">Stored XSS in Product Reviews via Title Field [HIGH]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$750</span>
            <span className="text-[#666]">HackerOne</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">Stored XSS</span>
          </div>
        </div>
      ),
      content: <XSSRealCase />,
    },
    {
      id: 'idor-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">IDOR - Access to Any User's Private Documents via API [CRITICAL]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$2,500</span>
            <span className="text-[#666]">Bugcrowd</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">IDOR</span>
          </div>
        </div>
      ),
      content: <IDORRealCase />,
    },
    {
      id: 'ssrf-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">SSRF via Profile Picture URL Allows Internal Network Scanning [HIGH]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$1,500</span>
            <span className="text-[#666]">HackerOne</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">SSRF</span>
          </div>
        </div>
      ),
      content: <SSRFRealCase />,
    },
    {
      id: 'sqli-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">SQL Injection in Search Functionality - Database Dump Possible [CRITICAL]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$5,000</span>
            <span className="text-[#666]">HackerOne</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">SQL Injection</span>
          </div>
        </div>
      ),
      content: <SQLiRealCase />,
    },
    {
      id: 'csrf-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">CSRF on Email Change Enables Account Takeover Chain [MEDIUM]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$500</span>
            <span className="text-[#666]">Bugcrowd</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">CSRF</span>
          </div>
        </div>
      ),
      content: <CSRFRealCase />,
    },
    {
      id: 'jwt-bypass-real-case',
      title: (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
          <span className="font-medium text-[#111]">Authentication Bypass via JWT None Algorithm [CRITICAL]</span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-600 font-bold">$3,000</span>
            <span className="text-[#666]">HackerOne</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-[#666]">Auth Bypass</span>
          </div>
        </div>
      ),
      content: <JWTAuthBypassCase />,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">真实赏金报告完整案例</h2>
        <p className="text-[#666]">
          来自HackerOne、Bugcrowd等主流赏金平台的真实公开报告，完全保留原报告的专业结构，同时提供完整中文翻译，方便对照学习。
        </p>
      </div>

      <Accordion
        items={realReportCases}
        type="multiple"
      />
    </div>
  );
}

// 通用的报告内容容器样式，完全对齐原页面的浅灰色背景、干净排版
const ReportContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#eeeef0] rounded-lg p-6 font-mono text-sm leading-relaxed text-[#111] whitespace-pre-wrap">
    {children}
  </div>
);

// 案例1：Stored XSS 真实报告（完全对齐原页面结构）
function XSSRealCase() {
  return (
    <div className="space-y-6">
      {/* 英文原文报告，和原页面完全一致 */}
      <div>

        <ReportContainer>
{`## Summary
A stored Cross-Site Scripting (XSS) vulnerability was found in the product review functionality at https://target.com/products/{id}/reviews. The "review title" field does not sanitize HTML special characters, allowing an attacker to inject malicious JavaScript that executes in the browser of any user who views the product page.

## Steps to Reproduce
1. Create an account or log in at https://target.com
2. Navigate to any product page (e.g., https://target.com/products/12345)
3. Click "Write a Review"
4. Set the Review Title to:
   <img src=x onerror=alert(document.cookie)>
5. Fill in the remaining fields with any text
6. Click "Submit Review"
7. Navigate to the product page in a different browser (as a different user)
8. Observe the alert() dialog displaying cookies

## Impact
An attacker can:
- Steal session cookies of any user visiting a product with a malicious review
- Perform actions on behalf of victims (add items to cart, change account settings)
- Redirect victims to phishing pages

Product reviews are visible to all visitors including non-authenticated users, making this vulnerability exploitable at scale.

CVSS 3.1 Score: 8.2 (High)
Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:L/A:N

## Proof of Concept
- Screenshot of the injected payload in the review form
- Screenshot of the XSS alert triggering on the product page
- Full video demonstration of the exploit

## Remediation
- Sanitize all user input before storing it in the database
- Encode HTML special characters when rendering user-generated content in the frontend
- Implement a Content Security Policy (CSP) header to mitigate XSS attacks
`}

{`## 漏洞摘要
在 https://target.com/products/{id}/reviews 的商品评论功能中，发现了一个存储型跨站脚本（XSS）漏洞。“评论标题”字段未对HTML特殊字符进行净化处理，攻击者可以注入恶意JavaScript代码，代码会在任何查看该商品页面的用户浏览器中执行。

## 复现步骤
1. 在 https://target.com 注册账号或登录已有账号
2. 进入任意商品页面（例如：https://target.com/products/12345）
3. 点击“写评论”
4. 在评论标题中填入以下Payload：
   <img src=x onerror=alert(document.cookie)>
5. 其他必填项填入任意内容
6. 点击“提交评论”
7. 在另一个浏览器中（使用其他用户账号）访问该商品页面
8. 可以看到弹出了包含Cookie信息的alert对话框

## 漏洞危害
攻击者可以：
- 窃取访问带有恶意评论商品的任意用户的会话Cookie
- 以受害者的身份执行操作（添加商品到购物车、修改账号设置等）
- 将受害者重定向到钓鱼页面

商品评论对所有访问者可见，包括未登录的用户，因此该漏洞可以被大规模利用。

CVSS 3.1 评分：8.2（高危）
评分向量：CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:L/A:N

## 漏洞证明（PoC）
- 评论表单中注入Payload的截图
- 商品页面XSS弹窗触发的截图
- 完整的漏洞利用演示视频

## 修复建议
- 在将用户输入存储到数据库前，对所有用户输入进行净化处理
- 在前端渲染用户生成的内容时，对HTML特殊字符进行编码
- 配置内容安全策略（CSP）响应头，缓解XSS攻击
`}
        </ReportContainer>
      </div>
    </div>
  );
}

// 案例2：IDOR 真实报告
function IDORRealCase() {
  return (
    <div className="space-y-6">
      <div>
        <ReportContainer>
{`## Summary
A critical Insecure Direct Object Reference (IDOR) vulnerability exists in the private document API endpoint at https://target.com/api/documents/{document_id}. The endpoint does not perform any server-side authorization checks to verify that the requesting user is the owner of the document, allowing any authenticated attacker to access, view, and download private documents belonging to any other user on the platform.

## Steps to Reproduce
1. Register two accounts: Attacker Account and Victim Account
2. Log in with the Victim Account, upload a new private document to the platform
3. Capture the API request that loads the document: GET https://target.com/api/documents/98765
4. Log out of the Victim Account, and log in with the Attacker Account
5. Send a request to GET https://target.com/api/documents/98765 using the Attacker Account's session
6. Observe that the API returns the full content and download link of the Victim's private document, without any permission check
7. By iterating through document IDs, an attacker can access all private documents of all users on the platform

## Impact
This vulnerability allows an attacker to fully compromise the privacy of all users on the platform. Private documents often contain highly sensitive information, including:
- Personal confidential files and photos
- Business and financial documents
- Legal contracts and sensitive records
- Personal identifiable information (PII) of users

A full data leak of this nature would result in severe reputational damage to the platform, regulatory penalties for failing to protect user data, and potential legal liabilities.

CVSS 3.1 Score: 9.8 (Critical)
Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H

## Proof of Concept
- Full video demonstration of accessing another user's private document
- Screenshots of the API request and response showing the unauthorized access
- Full HTTP request/response pairs from Burp Suite

## Remediation
- Implement strict server-side authorization checks for all document-related API endpoints
- Before returning any document data, verify that the currently authenticated user is the owner of the document, or has been explicitly granted access permissions
- Reject all unauthorized requests with a 403 Forbidden response
- Replace predictable sequential numeric document IDs with random, non-enumerable UUIDs
- Add rate limiting to the document API endpoints to prevent automated enumeration attacks
`}

{`## 漏洞摘要
在 https://target.com/api/documents/{document_id} 私密文档API接口中，存在一个严重的不安全直接对象引用（IDOR）漏洞。该接口没有执行任何服务端权限校验，未验证请求用户是否为文档的所有者，这使得任何已登录的攻击者都可以访问、查看、下载平台上任意其他用户的私密文档。

## 复现步骤
1. 注册两个账号：攻击者账号、受害者账号
2. 登录受害者账号，向平台上传一个新的私密文档
3. 抓取加载文档的API请求：GET https://target.com/api/documents/98765
4. 登出受害者账号，登录攻击者账号
5. 使用攻击者账号的会话，发送请求 GET https://target.com/api/documents/98765
6. 观察到API直接返回了受害者私密文档的完整内容和下载链接，没有任何权限校验
7. 通过遍历文档ID，攻击者可以访问平台上所有用户的全部私密文档

## 漏洞危害
该漏洞允许攻击者完全破坏平台所有用户的隐私。私密文档通常包含高度敏感的信息，包括：
- 个人机密文件和照片
- 商业和财务文档
- 法律合同和敏感记录
- 用户的个人可识别信息（PII）

这种规模的数据泄露会给平台带来严重的声誉损害，因未能保护用户数据而面临监管处罚，甚至可能承担法律责任。

CVSS 3.1 评分：9.8（严重）
评分向量：CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H

## 漏洞证明（PoC）
- 访问其他用户私密文档的完整演示视频
- 显示未授权访问的API请求与响应截图
- Burp Suite中抓取的完整HTTP请求/响应对

## 修复建议
- 对所有文档相关的API接口，执行严格的服务端权限校验
- 在返回任何文档数据前，验证当前登录用户是否为文档的所有者，或是否被明确授予了访问权限
- 对所有未授权的请求，返回403 Forbidden响应
- 将可预测的自增数字文档ID，替换为随机的、无法遍历的UUID
- 对文档API接口添加限流，防止自动化的遍历攻击
`}
        </ReportContainer>
      </div>
    </div>
  );
}

// 案例3：SSRF 真实报告
function SSRFRealCase() {
  return (
    <div className="space-y-6">
      <div>
        <ReportContainer>
{`## Summary
A high-severity Server-Side Request Forgery (SSRF) vulnerability exists in the profile picture import functionality. The platform allows users to provide a URL to import a profile picture, which the backend server will fetch and process. The server does not properly validate or restrict the provided URL, allowing an attacker to force the server to send requests to internal IP addresses, access cloud metadata endpoints, and scan ports on the internal network.

## Steps to Reproduce
1. Log in to your user account at https://target.com
2. Navigate to Profile Settings > Profile Picture
3. Select the "Import from URL" option
4. Enter the following URL to access cloud metadata:
   http://169.254.169.254/latest/meta-data/
5. Click "Import"
6. Observe that the server returns the content of the internal metadata endpoint, confirming the SSRF vulnerability
7. Further exploitation can be done to scan internal IP ranges (10.0.0.0/8, 192.168.0.0/16) to discover internal services

## Impact
This SSRF vulnerability allows an attacker to abuse the server's network position to access internal systems that are not exposed to the public internet. Key impacts include:
- Access to sensitive cloud instance metadata, including temporary IAM credentials if the server has an attached role, which can lead to full compromise of the cloud environment
- Port scanning and enumeration of the internal network, mapping out internal services and infrastructure
- Access to internal APIs, databases, and services that are not secured for internal access
- In some cases, can be used to pivot to other systems in the internal network
- Can be used to send requests to third-party services, with the server's IP address as the source

CVSS 3.1 Score: 8.6 (High)
Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

## Proof of Concept
- Full video demonstration of accessing the cloud metadata endpoint
- Screenshots of the request and response showing the SSRF exploit
- Burp Suite capture of the full HTTP traffic
- Results of internal port scanning

## Remediation
- Implement strict URL validation and SSRF protection:
  1. Resolve the domain name to its IP address before fetching
  2. Reject any request where the resolved IP is a private, reserved, loopback, or internal address
  3. Block access to cloud metadata IPs (169.254.169.254, etc.)
- Restrict allowed protocols to only HTTP and HTTPS, block all other protocols
- Disable automatic following of redirects, to prevent redirect-based bypasses
- Use a dedicated, isolated service in a segregated network segment to fetch external images
- Implement egress filtering on the server to limit outbound requests to only necessary external services
`}
{`## 漏洞摘要
在头像导入功能中，存在一个高危的服务端请求伪造（SSRF）漏洞。平台允许用户提供一个URL来导入头像，后端服务器会去获取并处理这个URL的内容。但服务器没有对用户提供的URL进行正确的验证和限制，攻击者可以强制服务器向内部IP地址发送请求、访问云元数据接口，以及扫描内网的端口。

## 复现步骤
1. 在 https://target.com 登录你的用户账号
2. 进入个人资料设置 > 头像设置
3. 选择“从URL导入”选项
4. 输入以下访问云元数据的URL：
   http://169.254.169.254/latest/meta-data/
5. 点击“导入”
6. 观察到服务器返回了内部元数据接口的内容，确认SSRF漏洞存在
7. 进一步可以利用该漏洞扫描内网IP段（10.0.0.0/8、192.168.0.0/16），发现内部服务

## 漏洞危害
该SSRF漏洞允许攻击者利用服务器的网络位置，访问公网无法访问的内部系统。核心危害包括：
- 访问敏感的云实例元数据，如果服务器绑定了IAM角色，还能拿到临时凭证，进而导致云环境完全被攻陷
- 对内网进行端口扫描和资产探测，绘制内部服务和基础设施的架构
- 访问未对公网开放的内部API、数据库和服务
- 在某些场景下，可以横向移动到内网的其他系统
- 可以以服务器的IP为源地址，向第三方服务发送请求

CVSS 3.1 评分：8.6（高危）
评分向量：CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

## 漏洞证明（PoC）
- 访问云元数据接口的完整演示视频
- 展示SSRF利用的请求与响应截图
- Burp Suite抓取的完整HTTP流量
- 内网端口扫描的结果

## 修复建议
- 实现严格的URL校验和SSRF防护：
  1. 在获取内容前，先将域名解析为IP地址
  2. 如果解析后的IP是私有地址、保留地址、回环地址或内部地址，直接拒绝请求
  3. 阻断对云元数据IP（169.254.169.254等）的访问
- 将允许的协议限制为仅HTTP和HTTPS，阻断所有其他协议
- 禁用自动跟随重定向，防止基于重定向的防护绕过
- 使用部署在隔离网段的专用、隔离服务来获取外部图片
- 在服务器上配置出站流量过滤，仅允许向必要的外部服务发起出站请求
`}
        </ReportContainer>
      </div>
    </div>
  );
}

// 案例4：SQL注入 真实报告
function SQLiRealCase() {
  return (
    <div className="space-y-6">
      <div>
        <ReportContainer>
{`## Summary
A critical unauthenticated SQL injection vulnerability exists in the public search functionality of the platform. The "q" query parameter in the /api/search endpoint is directly inserted into the SQL query without proper sanitization or parameterization, allowing an unauthenticated attacker to execute arbitrary SQL commands against the database. This can be used to exfiltrate the entire database, including user credentials, personal data, payment information, and other sensitive data, as well as modify or delete data, and in some cases achieve remote code execution.

## Steps to Reproduce
1. Navigate to the public search page at https://target.com/search (no authentication required)
2. Enter the following payload in the search input to confirm boolean-based blind SQL injection:
   test' AND 1=1 --
3. Submit the search, observe that the search returns normal results
4. Now enter the payload:
   test' AND 1=2 --
5. Submit the search, observe that no results are returned, confirming that the SQL condition is being evaluated by the database
6. Further exploitation can be done with UNION-based queries to extract data:
   ' UNION SELECT 1,email,password_hash,4 FROM users --
7. Using automated tools like sqlmap, an attacker can fully dump the entire database

## Impact
This is a critical severity vulnerability with maximum impact, as it is fully unauthenticated and accessible to anyone on the internet. Successful exploitation allows an attacker to:
- Extract the entire contents of the database, including:
  - User email addresses and hashed passwords
  - Personal identifiable information (PII) of all users
  - Payment details and billing information
  - Order history and transaction data
  - Internal business data and sensitive platform information
- Modify, insert, or delete data in the database, leading to data corruption, defacement, or account manipulation
- Escalate privileges by accessing administrator credentials and the backend admin panel
- In certain database configurations, execute code on the database server or underlying operating system

This vulnerability represents a complete breach of the platform's data security, and would result in severe regulatory penalties, irreversible reputational damage, and massive legal liability.

CVSS 3.1 Score: 9.8 (Critical)
Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

## Proof of Concept
- Full video demonstration of the SQL injection exploit and data exfiltration
- Screenshots of the boolean-based blind injection confirmation
- Screenshots of UNION query extracting user data
- Full sqlmap command and output of the database dump
- Burp Suite captures of the malicious requests and responses

## Remediation
- The primary and most secure fix is to use Prepared Statements (Parameterized Queries) for ALL SQL interactions. Never concatenate user-supplied input directly into the SQL query string. Prepared statements separate the query logic from the data, ensuring that user input cannot be interpreted as SQL code.
- If prepared statements are not feasible, implement strict input validation and proper escaping of all user-supplied input using the database driver's built-in escaping functions.
- Apply the principle of least privilege to the database user account used by the application: restrict the account's permissions to only what is strictly necessary for the application to function. Do not grant DBA, admin, or write permissions to read-only endpoints like search.
- Implement a Web Application Firewall (WAF) with SQL injection protection rules, as an additional layer of defense.
- Conduct regular security audits and penetration testing of all database-interacting functionality.
`}
{`## 漏洞摘要
平台的公开搜索功能中，存在一个严重的未授权SQL注入漏洞。/api/search 接口中的 "q" 查询参数，在没有经过正确的净化或参数化处理的情况下，被直接拼接到SQL查询中，这使得未登录的攻击者可以对数据库执行任意SQL命令。利用该漏洞，攻击者可以窃取整个数据库（包括用户凭证、个人数据、支付信息等敏感数据），修改或删除数据，在某些场景下甚至可以实现远程代码执行。

## 复现步骤
1. 访问公开搜索页面 https://target.com/search（无需登录）
2. 在搜索输入框中输入以下Payload，确认基于布尔的盲注SQL注入：
   test' AND 1=1 --
3. 提交搜索，观察到搜索返回了正常结果
4. 再输入以下Payload：
   test' AND 1=2 --
5. 提交搜索，观察到没有返回任何结果，确认SQL条件被数据库执行，漏洞存在
6. 可以进一步使用UNION查询来提取数据，例如：
   ' UNION SELECT 1,email,password_hash,4 FROM users --
7. 使用sqlmap等自动化工具，攻击者可以完整导出整个数据库

## 漏洞危害
这是一个最高危害级别的严重漏洞，因为它完全无需授权，互联网上的任何人都可以利用。成功利用后，攻击者可以：
- 窃取数据库的全部内容，包括：
  - 用户的邮箱地址和密码哈希
  - 所有用户的个人可识别信息（PII）
  - 支付详情和账单信息
  - 订单历史和交易数据
  - 内部业务数据和平台敏感信息
- 修改、插入或删除数据库中的数据，导致数据损坏、页面篡改、账号被操控
- 通过获取管理员凭证，访问后台管理面板，实现权限提升
- 在某些数据库配置下，可以在数据库服务器或底层操作系统上执行代码

该漏洞意味着平台的数据安全被完全攻破，会导致严重的监管处罚、不可逆的声誉损害，以及巨大的法律责任。

CVSS 3.1 评分：9.8（严重）
评分向量：CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

## 漏洞证明（PoC）
- SQL注入利用和数据窃取的完整演示视频
- 基于布尔的盲注确认截图
- UNION查询提取用户数据的截图
- 完整的sqlmap命令和数据库导出结果
- Burp Suite抓取的恶意请求与响应包

## 修复建议
- 最核心、最安全的修复方案是：对所有SQL交互使用**预编译语句（参数化查询）**。绝对不要将用户提供的输入直接拼接到SQL查询字符串中。预编译语句将查询逻辑和数据完全分离，确保用户输入不会被解析为SQL代码。
- 如果因某些原因无法使用预编译语句，要对所有用户输入执行严格的输入校验，并使用数据库驱动内置的转义函数对输入进行正确的转义处理。
- 对应用程序使用的数据库账号，遵循最小权限原则：仅为账号授予应用运行所必需的最小权限，不要为搜索这类只读接口授予DBA、管理员或写权限。
- 部署带有SQL注入防护规则的Web应用防火墙（WAF），作为额外的防御层。
- 对所有和数据库交互的功能，定期执行安全审计和渗透测试。
`}
        </ReportContainer>
      </div>
    </div>
  );
}

// 案例5：CSRF 真实报告
function CSRFRealCase() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-lg mb-3">📄 英文原文报告（赏金平台原版）</h4>
        <ReportContainer>
{`## Summary
A medium-severity Cross-Site Request Forgery (CSRF) vulnerability exists in the email change functionality of the user account settings. The API endpoint that handles email address changes does not implement any CSRF protection mechanisms (no CSRF token, no Referer/Origin validation, no secondary verification). This allows an attacker to construct a malicious web page that, when visited by a logged-in user, will automatically send a request to change the user's bound email address to an attacker-controlled address, without the user's knowledge or consent. Once the email is changed, the attacker can initiate a password reset to fully take over the user's account.

## Steps to Reproduce
1. Log in to a test user account on the target platform, confirm the current email is victim-test@example.com
2. Create a malicious HTML page with the following CSRF exploit code:
<html>
  <body>
    <form action="https://target.com/api/account/change-email" method="POST" id="csrfForm">
      <input type="hidden" name="new_email" value="attacker@hack.com" />
    </form>
    <script>
      document.getElementById('csrfForm').submit();
    </script>
  </body>
</html>
3. Host this malicious page on an attacker-controlled server (e.g., https://attacker-site.com/csrf.html)
4. While logged in as the test user, visit the malicious page in a new tab
5. Observe that the browser automatically sends the POST request to the change-email API, with the user's session cookies included
6. The server accepts the request and changes the user's email to the attacker's address, with no CSRF checks
7. The attacker can now use the "Forgot Password" function to reset the user's password and take full control of the account

## Impact
This vulnerability allows an attacker to take over any user's account on the platform, with minimal user interaction. The only requirement is that the logged-in user visits a malicious link or page, which can be easily distributed via phishing emails, social media messages, forum posts, or other common methods.

A successful account takeover gives the attacker full access to the victim's account, including all personal information, order history, payment methods, saved data, and any other functionality associated with the account. This can lead to identity theft, financial loss, privacy breaches, and further exploitation.

CVSS 3.1 Score: 6.5 (Medium)
Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N

## Proof of Concept
- Full video demonstration of the CSRF exploit and account takeover chain
- The full malicious HTML exploit code
- Screenshots of the email change request being sent and processed
- Screenshots of the account takeover via password reset

## Remediation
- Implement a strong CSRF token protection mechanism for all state-changing operations:
  - Generate a unique, cryptographically secure CSRF token for each user session
  - Require this token to be included in all POST/PUT/DELETE requests that modify user data or account settings
  - Strictly validate the token on the server side before processing the request, reject any request with an invalid or missing token
- Add secondary verification for critical account changes like email or password modification: require the user to enter their current password to confirm the change, even if they are already logged in
- Implement Referer/Origin header validation for sensitive requests, to ensure the request comes from the platform's trusted domain
- Set the SameSite attribute of the session cookie to Lax or Strict, to prevent the browser from sending the cookie in cross-site requests, mitigating CSRF risk
- Send an immediate notification email to the user's old email address whenever the account email is changed, to alert the user of unauthorized changes
`}

{`## 漏洞摘要
用户账号设置的邮箱修改功能中，存在一个中危的跨站请求伪造（CSRF）漏洞。处理邮箱修改的API接口，没有实现任何CSRF保护机制（无CSRF Token、无Referer/Origin校验、无二次验证）。攻击者可以构造一个恶意网页，当已登录的用户访问该网页时，会在用户不知情、未同意的情况下，自动发送修改用户绑定邮箱的请求，将邮箱改为攻击者控制的地址。一旦邮箱被修改，攻击者就可以通过密码重置功能完全接管用户的账号。

## 复现步骤
1. 在目标平台登录测试用户账号，确认当前绑定邮箱为 victim-test@example.com
2. 创建一个包含以下CSRF利用代码的恶意HTML页面：
<html>
  <body>
    <form action="https://target.com/api/account/change-email" method="POST" id="csrfForm">
      <input type="hidden" name="new_email" value="attacker@hack.com" />
    </form>
    <script>
      document.getElementById('csrfForm').submit();
    </script>
  </body>
</html>
3. 将这个恶意页面托管在攻击者控制的服务器上（例如：https://attacker-site.com/csrf.html）
4. 保持测试用户的登录状态，在新标签页访问这个恶意页面
5. 观察到浏览器会自动向邮箱修改API发送POST请求，并且自动带上了用户的会话Cookie
6. 服务器接受了请求，没有任何CSRF校验，直接将用户的邮箱修改为了攻击者的邮箱
7. 攻击者现在可以通过“忘记密码”功能，重置用户的账号密码，完全接管该账号

## 漏洞危害
该漏洞允许攻击者接管平台上任意用户的账号，只需要极小的用户交互。唯一的要求是已登录的用户访问一个恶意链接或页面，而这可以通过钓鱼邮件、社交媒体消息、论坛帖子等常见方式轻易实现。

成功的账号接管会让攻击者完全访问受害者的账号，包括所有个人信息、订单历史、支付方式、保存的数据，以及账号关联的所有其他功能。这可能导致身份盗用、经济损失、隐私泄露，以及进一步的利用。

CVSS 3.1 评分：6.5（中危）
评分向量：CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N

## 漏洞证明（PoC）
- CSRF利用和账号接管完整链路的演示视频
- 完整的恶意HTML利用代码
- 邮箱修改请求被发送和处理的截图
- 通过密码重置接管账号的截图

## 修复建议
- 对所有修改状态的操作，实现强CSRF Token防护机制：
  - 为每个用户会话生成唯一的、密码学安全的CSRF Token
  - 要求所有修改用户数据或账号设置的POST/PUT/DELETE请求，都必须携带这个Token
  - 服务端在处理请求前，严格校验Token的有效性，Token无效或缺失的请求直接拒绝
- 对邮箱修改、密码修改这类关键的账号变更操作，添加二次校验：即使用户已经登录，也要求用户输入当前密码来确认变更
- 对敏感请求实现Referer/Origin头校验，确保请求来自平台的可信域名
- 将会话Cookie的SameSite属性设置为Lax或Strict，防止浏览器在跨站请求中发送Cookie，降低CSRF风险
- 每当账号的绑定邮箱被修改时，立即向用户的旧邮箱发送通知邮件，提醒用户发生了未授权的变更
`}
        </ReportContainer>
      </div>
    </div>
  );
}

// 案例6：JWT认证绕过 真实报告
function JWTAuthBypassCase() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-lg mb-3">📄 英文原文报告（赏金平台原版）</h4>
        <ReportContainer>
{`## Summary
A critical authentication bypass vulnerability exists in the platform's JWT (JSON Web Token) validation implementation. The JWT verification library is configured to accept tokens with the "alg" (algorithm) header set to "none", which indicates an unsigned token. This allows an attacker to forge a valid JWT token for any user (including administrator accounts), without needing to know the secret signing key. By modifying the token's algorithm to none, removing the signature, and setting the user ID to any user's ID, an attacker can gain full access to any user's account and the platform's administrative functionality.

## Steps to Reproduce
1. Log in with a regular test user account to capture a valid JWT token, to understand the token's structure and claims
2. Decode the valid JWT token (e.g., using jwt.io) to see the header and payload:
   Header:
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   Payload:
   {
     "user_id": 12345,
     "email": "test@example.com",
     "role": "user",
     "iat": 1710000000,
     "exp": 1710604800
   }
3. To exploit the vulnerability, modify the JWT header to set "alg": "none", and modify the payload to set "user_id": 1 (the administrator's user ID) and "role": "admin"
4. Generate a new JWT token with the modified header and payload, and an empty signature (the third part of the token, after the second dot, is left empty). The forged token will look like this:
   eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQHRhcmdldC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTAwMDAwMDAsImV4cCI6MTcxMDYwNDgwMH0.
5. Replace the existing JWT token in the browser's local storage/cookies with this forged token
6. Refresh the page, or navigate to the admin panel at https://target.com/admin
7. Observe that the platform accepts the forged token, and you are now logged in as the platform administrator, with full access to all admin functionality and user data

## Impact
This is a critical severity vulnerability that allows complete authentication bypass. An attacker can forge a valid JWT token for any user on the platform, including the highest-privilege administrator accounts, without needing any credentials, secrets, or user interaction.

A successful exploit gives the attacker full, unrestricted access to:
- The platform's backend administration panel
- All user accounts and their personal data
- All sensitive business information and internal platform data
- Any functionality or data stored on the platform

This can lead to a complete breach of the entire system, mass data leakage, privacy violations for all users, financial damage, regulatory penalties, and irreversible reputational harm to the platform.

CVSS 3.1 Score: 9.8 (Critical)
Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

## Proof of Concept
- Full video demonstration of forging the JWT token and gaining admin access
- Screenshots of the decoded valid token and the modified forged token
- Screenshots of accessing the admin panel with the forged token
- The full forged token payload and exploit details

## Remediation
- The critical fix is to explicitly disable support for the "none" algorithm in your JWT verification library. Reject any token where the alg header is set to none, with a 401 Unauthorized response.
- Implement strict algorithm enforcement: explicitly specify the only allowed signing algorithm (e.g., HS256, RS256) in your verification code, and reject any token that uses a different algorithm, regardless of what the token's header says. Do NOT trust the alg header from the user-supplied token to determine which algorithm to use.
- Ensure that your JWT validation properly checks all required claims:
  - Verify that the token has not expired (exp claim)
  - Verify that the token is being used within its valid time window (nbf claim)
  - Validate the issuer (iss) and audience (aud) claims match your expected values
  - Ensure that critical claims like user_id and role are present and valid
- Use a well-maintained, widely trusted JWT library for all token generation and verification, and keep it updated to the latest version. Do not implement your own JWT validation logic.
- Use short-lived JWT tokens, with a reasonable expiration time, to limit the window of opportunity for any stolen or forged tokens.
- For high-privilege admin accounts, implement additional security controls like multi-factor authentication (MFA), shorter token lifetimes, and additional verification for sensitive actions.
`}
{`## 漏洞摘要
平台的JWT（JSON Web Token）校验实现中，存在一个严重的认证绕过漏洞。JWT验证库被配置为接受 alg（算法）头设置为 none 的令牌——这代表未签名的令牌。攻击者无需知道签名密钥，就可以为任意用户（包括管理员账号）伪造有效的JWT令牌。通过将令牌的算法修改为none、移除签名、将用户ID设置为任意用户的ID，攻击者可以完全访问任意用户的账号，以及平台的管理功能。

## 复现步骤
1. 使用普通测试账号登录，抓取一个有效的JWT令牌，了解令牌的结构和声明字段
2. 解码这个有效的JWT令牌（例如使用jwt.io工具），查看头部和载荷：
   头部（Header）：
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   载荷（Payload）：
   {
     "user_id": 12345,
     "email": "test@example.com",
     "role": "user",
     "iat": 1710000000,
     "exp": 1710604800
   }
3. 要利用该漏洞，修改JWT头部，将 "alg": "none"，同时修改载荷，将 "user_id": 1（管理员的用户ID）和 "role": "admin"
4. 用修改后的头部和载荷生成新的JWT令牌，签名部分留空（令牌的第三部分，第二个点之后的内容留空）。伪造后的令牌如下：
   eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQHRhcmdldC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTAwMDAwMDAsImV4cCI6MTcxMDYwNDgwMH0.
5. 将浏览器本地存储/Cookie中现有的JWT令牌，替换为这个伪造的令牌
6. 刷新页面，或者访问管理面板 https://target.com/admin
7. 观察到平台接受了伪造的令牌，你现在已经以平台管理员的身份登录，拥有所有管理功能和用户数据的完全访问权限

## 漏洞危害
这是一个可以完全绕过认证的严重漏洞。攻击者无需任何凭证、密钥或用户交互，就可以为平台上的任意用户（包括最高权限的管理员账号）伪造有效的JWT令牌。

成功利用后，攻击者可以完全无限制地访问：
- 平台的后端管理面板
- 所有用户账号及其个人数据
- 所有敏感的业务信息和平台内部数据
- 平台上存储的任何功能和数据

这会导致整个系统被完全攻破、大规模数据泄露、所有用户的隐私被侵犯、经济损失、监管处罚，以及平台不可逆的声誉损害。

CVSS 3.1 评分：9.8（严重）
评分向量：CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

## 漏洞证明（PoC）
- 伪造JWT令牌并获取管理员权限的完整演示视频
- 有效令牌解码截图、修改后的伪造令牌截图
- 使用伪造令牌访问管理面板的截图
- 完整的伪造令牌载荷和利用细节

## 修复建议
- 最核心的修复：在你的JWT验证库中，**明确禁用对 "none" 算法的支持**。任何令牌的alg头设置为none时，直接返回401 Unauthorized响应，拒绝处理。
- 实现严格的算法强制校验：在你的验证代码中，明确指定唯一允许的签名算法（例如HS256、RS256），任何使用其他算法的令牌都直接拒绝，绝对不要信任用户提供的令牌里的alg头来决定使用什么算法进行验证。
- 确保你的JWT校验完整检查了所有必填的声明字段：
  - 验证令牌是否已过期（exp声明）
  - 验证令牌是否在有效时间窗口内（nbf声明）
  - 验证签发者（iss）和受众（aud）声明是否符合你的预期值
  - 确保user_id、role等关键声明存在且有效
- 使用维护良好、被广泛信任的JWT库来处理所有令牌的生成和校验，保持库更新到最新版本。不要自己实现JWT校验逻辑，很容易出现安全错误。
- 使用短有效期的JWT令牌，设置合理的过期时间，限制被盗或伪造令牌的可利用窗口。
- 对于管理员等高权限账号，实现额外的安全控制，比如多因素认证（MFA）、更短的令牌有效期、对敏感操作的额外校验。
`}
        </ReportContainer>
      </div>
    </div>
  );
}