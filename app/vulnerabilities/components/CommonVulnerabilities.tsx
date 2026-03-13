// app/vulnerabilities/components/CommonVulnerabilities.tsx

// 风险等级样式配置
type Severity = "严重" | "高" | "中" | "低";
interface SeverityConfig {
  [key: string]: { color: string; label: string };
}
const severityConfig: SeverityConfig = {
  "严重": { color: "bg-red-100 text-red-700", label: "严重风险" },
  "高": { color: "bg-orange-100 text-orange-700", label: "高风险" },
  "中": { color: "bg-yellow-100 text-yellow-700", label: "中风险" },
  "低": { color: "bg-blue-100 text-blue-700", label: "低风险" },
};

// 漏洞分类样式配置
interface CategoryConfig {
  [key: string]: { color: string };
}
const categoryConfig: CategoryConfig = {
  "Web技术类": { color: "bg-blue-100 text-blue-700" },
  "访问控制类": { color: "bg-yellow-100 text-yellow-700" },
  "数据注入类": { color: "bg-purple-100 text-purple-700" },
  "请求伪造类": { color: "bg-orange-100 text-orange-700" },
  "业务逻辑类": { color: "bg-indigo-100 text-indigo-700" },
  "安全配置类": { color: "bg-slate-800/60 text-gray-700" },
  "信息泄露类": { color: "bg-teal-100 text-teal-700" },
  "文件上传类": { color: "bg-pink-100 text-pink-700" },
  "API安全类": { color: "bg-cyan-100 text-cyan-700" },
  "认证类": { color: "bg-red-100 text-red-700" },
};

// 完整漏洞数据，100%还原原页面内容
interface Vulnerability {
  name: string;
  fullName: string;
  severity: Severity;
  category: string;
  definition: string;
  simpleDesc: string;
}
const vulnerabilitiesList: Vulnerability[] = [
  {
    name: "XSS",
    fullName: "Cross-Site Scripting 跨站脚本攻击",
    severity: "高",
    category: "Web技术类",
    definition: "XSS 是一种安全漏洞，允许攻击者在网站页面中注入恶意的 JavaScript 代码，这些代码会在其他访问该页面的用户浏览器中执行。",
    simpleDesc: "简单来说：你在网站上发了一条评论，但你写的不是普通文字，而是一段 JavaScript 代码。如果网站没有对内容做过滤和转义，这段代码就会在每一个打开这条评论的用户浏览器里自动执行。"
  },
  {
    name: "IDOR",
    fullName: "Insecure Direct Object Reference 不安全的直接对象引用",
    severity: "高",
    category: "访问控制类",
    definition: "IDOR 漏洞产生的原因是，应用程序直接使用用户可控的标识（比如用户ID、订单号）来访问资源，却没有校验当前用户是否有权限访问该资源。",
    simpleDesc: "简单来说：比如页面的URL是 /profile?id=123，如果你把id改成124，就能直接看到另一个用户的个人信息，这就是典型的IDOR漏洞。"
  },
  {
    name: "SQL Injection",
    fullName: "SQL 注入",
    severity: "严重",
    category: "数据注入类",
    definition: "SQL注入漏洞允许攻击者通过用户输入点，向数据库查询中注入恶意的SQL语句，从而操控后端数据库，实现数据泄露、数据篡改，甚至远程代码执行。",
    simpleDesc: "简单来说：如果你在网站的搜索框里输入 `' OR '1'='1`，网站返回了意料之外的全部数据，说明这个网站可能存在SQL注入漏洞。"
  },
  {
    name: "SSRF",
    fullName: "Server-Side Request Forgery 服务端请求伪造",
    severity: "高",
    category: "请求伪造类",
    definition: "SSRF 漏洞允许攻击者强制服务器，向攻击者指定的URL地址发起HTTP请求，包括访问企业内网资源、云服务元数据接口等。",
    simpleDesc: "简单来说：比如一个应用让你输入图片的URL来加载图片，如果你输入了云服务的元数据地址 `http://169.254.169.254/latest/meta-data/`，服务器真的去请求并返回了这些敏感数据，这就是SSRF漏洞。"
  },
  {
    name: "CSRF",
    fullName: "Cross-Site Request Forgery 跨站请求伪造",
    severity: "中",
    category: "请求伪造类",
    definition: "CSRF 攻击会欺骗已经登录的用户，在其不知情的情况下，在Web应用中执行非预期的操作。",
    simpleDesc: "简单来说：攻击者给你发了一个链接，你点开之后，会自动在你已经登录的网站上执行操作，比如修改密码、发起转账，而你完全不知情。"
  },
  {
    name: "Open Redirect",
    fullName: "开放重定向漏洞",
    severity: "低",
    category: "访问控制类",
    definition: "开放重定向漏洞允许攻击者通过网站的URL跳转功能，把访问者引导到外部的恶意网站。",
    simpleDesc: "简单来说：网站有一个跳转链接 `/redirect?url=https://example.com`，如果你把url改成恶意网站的地址，网站依然会直接跳转到这个恶意地址，这就是开放重定向漏洞。"
  },
  {
    name: "XXE",
    fullName: "XML External Entity XML外部实体注入",
    severity: "高",
    category: "数据注入类",
    definition: "XXE 漏洞发生在应用程序对XML内容的处理不安全时，攻击者可以注入外部实体声明，从而读取服务器上的系统文件、发起SSRF请求等。",
    simpleDesc: "简单来说：你给应用上传了一个XML文件，在里面加了指向服务器系统文件（比如/etc/passwd）的DOCTYPE声明，如果应用返回了这个文件的内容，就说明存在XXE漏洞。"
  },
  {
    name: "SSTI",
    fullName: "Server-Side Template Injection 服务端模板注入",
    severity: "严重",
    category: "数据注入类",
    definition: "SSTI 漏洞发生在用户输入的内容被直接插入到服务端的模板中，且没有做安全过滤，最终导致攻击者可以在服务端执行任意代码。",
    simpleDesc: "简单来说：如果你在网站的输入框里输入 `{{7*7}}`，页面返回了计算结果49，就说明很可能存在SSTI漏洞。应用会在服务端执行模板里的表达式，甚至可以执行系统命令。"
  },
  {
    name: "Race Condition",
    fullName: "竞争条件漏洞",
    severity: "高",
    category: "业务逻辑类",
    definition: "竞争条件漏洞发生在多个并发操作同时访问同一个资源时，由于系统对时序的处理不当，导致出现非预期的执行结果。",
    simpleDesc: "简单来说：你在同一时间，同时发起两次使用优惠券的请求，系统可能在优惠券标记为已使用之前，就同时处理了这两次请求，让你成功使用了两次优惠券，这就是典型的竞争条件漏洞。"
  },
  {
    name: "Business Logic Flaw",
    fullName: "业务逻辑漏洞",
    severity: "中",
    category: "业务逻辑类",
    definition: "业务逻辑漏洞是由于应用的核心业务流程设计缺陷导致的，攻击者可以通过非预期的方式，操纵应用的业务功能，而开发者完全没有预料到这种操作。",
    simpleDesc: "简单来说：比如你在购物时，给商品数量填了负数，结果系统不仅没扣钱，反而给你退了钱；或者你可以跳过支付流程的某一步，直接拿到商品，这些都是业务逻辑漏洞。"
  },
  {
    name: "CORS Misconfiguration",
    fullName: "CORS 配置错误",
    severity: "中",
    category: "安全配置类",
    definition: "CORS（跨域资源共享）配置错误，发生在服务器允许了不可信的外部源（origin）通过AJAX请求访问自身的敏感资源。",
    simpleDesc: "简单来说：A网站信任了任意其他网站，攻击者搭建了一个恶意网站，当用户访问恶意网站时，网站会代用户向A网站发起请求，窃取用户的敏感数据。"
  },
  {
    name: "Information Disclosure",
    fullName: "信息泄露漏洞",
    severity: "低",
    category: "信息泄露类",
    definition: "信息泄露漏洞发生在应用程序向未授权的用户暴露了敏感信息。",
    simpleDesc: "简单来说：网站的错误提示里暴露了数据库结构、文件路径；或者服务器上的backup.zip、.git目录可以直接访问；或者版本号、调试信息等敏感内容被泄露，都属于信息泄露漏洞。"
  },
  {
    name: "Malicious File Upload",
    fullName: "恶意文件上传漏洞",
    severity: "严重",
    category: "文件上传类",
    definition: "文件上传漏洞允许攻击者向服务器上传恶意文件，这些文件后续可以被执行，从而实现代码执行、控制服务器等危害。",
    simpleDesc: "简单来说：网站允许用户上传头像图片，如果你成功上传了一个PHP文件，并且可以访问执行这个文件，就能控制整个服务器，这就是严重的文件上传漏洞。"
  },
  {
    name: "API Vulnerabilities",
    fullName: "API 安全漏洞",
    severity: "高",
    category: "API安全类",
    definition: "API漏洞涵盖了API接口中的各类安全问题，包括认证缺陷、权限控制缺失、速率限制缺失、过度数据暴露等。",
    simpleDesc: "简单来说：API是应用之间通信的接口，如果API没有正确校验用户身份和权限，就可能导致未授权访问敏感数据、越权操作等问题。"
  },
  {
    name: "CRLF Injection",
    fullName: "Carriage Return Line Feed Injection 回车换行符注入",
    severity: "中",
    category: "数据注入类",
    definition: "CRLF注入漏洞允许攻击者在HTTP头或服务器响应中注入换行符（\r\n），可能导致HTTP响应拆分、注入自定义响应头，甚至XSS攻击。",
    simpleDesc: "简单来说：如果服务器把你的输入内容放到了响应头里，你输入 `\r\n\r\n` 再加上HTML代码，服务器就会把响应头和响应体分开，把你注入的HTML当成页面内容执行。"
  },
  {
    name: "Clickjacking",
    fullName: "点击劫持（UI Redressing）",
    severity: "中",
    category: "Web技术类",
    definition: "点击劫持是一种欺骗攻击，攻击者通过透明的层，把隐藏的页面元素覆盖在可见的按钮上，诱导用户点击隐藏的危险元素，也叫UI伪装攻击。",
    simpleDesc: "简单来说：攻击者把「删除账号」按钮，用完全透明的方式盖在「领取奖品」按钮下面。当你点击「领取奖品」时，实际上点击的是「删除账号」按钮，这就是点击劫持。"
  },
  {
    name: "JWT Vulnerabilities",
    fullName: "JSON Web Token 安全漏洞",
    severity: "高",
    category: "认证类",
    definition: "JWT漏洞源于用于身份认证和授权的JSON Web Token的错误实现与配置，可能导致身份伪造、权限提升等严重危害。",
    simpleDesc: "简单来说：JWT就像你的数字身份凭证，如果你能伪造这个凭证，或者修改里面的内容（比如把用户角色从普通用户改成管理员），就能冒充任意用户登录，这就是JWT漏洞。"
  },
  {
    name: "Prototype Pollution",
    fullName: "JavaScript 原型污染",
    severity: "高",
    category: "Web技术类",
    definition: "原型污染是JavaScript中的安全漏洞，允许攻击者修改JavaScript对象的基础原型，从而影响应用中所有的对象，可能导致XSS、远程代码执行、安全校验绕过等危害。",
    simpleDesc: "简单来说：在JavaScript里，所有对象都会继承自Object.prototype。如果你能修改这个原型，比如给它加上 `isAdmin=true` 的属性，那么应用里的所有对象都会继承这个属性，可能直接绕过权限校验。"
  },
  {
    name: "GraphQL Vulnerabilities",
    fullName: "GraphQL 安全漏洞",
    severity: "高",
    category: "数据注入类",
    definition: "GraphQL漏洞源于GraphQL的特有特性，比如自检内省、嵌套查询、批量请求等，配置不当会导致API完整结构泄露、敏感数据批量获取、服务器资源耗尽等问题。",
    simpleDesc: "简单来说：GraphQL就像一个可以让你自定义点菜的餐厅，如果没有限制，你可以用一个请求拿到餐厅里所有的菜品数据，包括原本不对外公开的内容，甚至可以让餐厅超负荷运转。"
  },
  {
    name: "Cache Poisoning",
    fullName: "Web Cache Poisoning Web缓存投毒",
    severity: "高",
    category: "Web技术类",
    definition: "Web缓存投毒漏洞允许攻击者向服务器或CDN的缓存中注入恶意内容，让所有访问该页面的用户，都收到被污染的恶意内容。",
    simpleDesc: "简单来说：服务器为了加快访问速度，会保存页面的缓存副本。如果你能给这个缓存副本里注入恶意代码，那么所有访问这个页面的用户，都会收到带恶意代码的页面。"
  },
  {
    name: "HTTP Request Smuggling",
    fullName: "HTTP 请求走私",
    severity: "严重",
    category: "Web技术类",
    definition: "HTTP请求走私攻击，利用前端服务器和后端服务器对HTTP请求的解析差异，欺骗服务器处理攻击者构造的隐藏请求，可能导致安全校验绕过、窃取其他用户的请求数据等严重危害。",
    simpleDesc: "简单来说：门口的保安和屋里的安保，对同一条消息的解读不一样。攻击者精心构造了一条消息，让保安只看到了无害的内容，而屋里的安保却看到了两条消息，从而执行了攻击者隐藏的恶意请求。"
  },
  {
    name: "Insecure Deserialization",
    fullName: "不安全的反序列化",
    severity: "严重",
    category: "数据注入类",
    definition: "不安全的反序列化漏洞发生在应用程序对来自不可信来源的序列化数据，不做安全校验就直接反序列化，可能导致远程代码执行、对象篡改、权限绕过等危害。",
    simpleDesc: "简单来说：序列化就像把蛋糕写成配方，反序列化就是根据配方重新做出蛋糕。如果攻击者修改了配方，反序列化的时候就会做出一个「爆炸蛋糕」，让服务器执行任意命令，完全被控制。"
  },
  {
    name: "DNS Rebinding",
    fullName: "DNS 重绑定攻击",
    severity: "高",
    category: "请求伪造类",
    definition: "DNS重绑定攻击利用了DNS解析和浏览器同源策略的差异，攻击者控制自己的DNS服务器，让域名先指向自己的服务器，再改成内网IP地址，从而让浏览器允许攻击者访问内网资源。",
    simpleDesc: "简单来说：攻击者的域名，第一次解析指向了他自己的恶意服务器，等浏览器信任了这个域名后，他把域名的解析改成了localhost或者企业内网IP，浏览器因为同源策略的限制被绕过，就会允许攻击者访问内网的服务。"
  },
  {
    name: "WebSocket Vulnerabilities",
    fullName: "WebSocket 安全漏洞",
    severity: "高",
    category: "Web技术类",
    definition: "WebSocket漏洞源于WebSocket连接的安全控制缺失，比如没有校验来源、没有过滤输入内容，可能导致XSS、CSRF、数据窃取等危害。",
    simpleDesc: "简单来说：WebSocket就像浏览器和服务器之间打开的一条持续通话的电话线路。如果服务器不校验打电话的人是谁，也不检查通话内容，攻击者就可以窃听、伪造消息，甚至注入恶意内容。"
  },
  {
    name: "OAuth Vulnerabilities",
    fullName: "OAuth 2.0 安全漏洞",
    severity: "高",
    category: "认证类",
    definition: "OAuth漏洞源于OAuth 2.0认证授权协议的错误实现，可能导致用户账号被劫持、未授权访问受保护的资源等危害。",
    simpleDesc: "简单来说：OAuth就像你给别人一把临时钥匙，让他只能打开指定的房间。如果系统有缺陷，攻击者就可以复制这把钥匙，或者用它打开其他房间，甚至完全接管你的账号。"
  },
  {
    name: "NoSQL Injection",
    fullName: "NoSQL 注入",
    severity: "高",
    category: "数据注入类",
    definition: "NoSQL注入漏洞允许攻击者向MongoDB等NoSQL数据库中，注入恶意的查询操作符，从而绕过认证、篡改查询条件、获取未授权的数据。",
    simpleDesc: "简单来说：和SQL注入类似，但针对的是非关系型数据库。比如你在密码框里提交 `password[$ne]=x`，数据库就会匹配所有密码不等于x的账号，可能直接绕过登录校验。"
  },
  {
    name: "Host Header Injection",
    fullName: "HTTP Host 头注入",
    severity: "中",
    category: "数据注入类",
    definition: "Host头注入漏洞发生在应用程序信任了客户端发送的Host头的值，并用它来构建URL、处理跳转、生成内容，可能导致密码重置令牌窃取、缓存投毒等危害。",
    simpleDesc: "简单来说：当你申请重置密码时，网站会给你的邮箱发重置链接。如果你把请求里的Host头改成你自己的域名，网站生成的重置链接里的域名就变成了你的，用户点击后令牌就会被你窃取。"
  },
  {
    name: "Mass Assignment",
    fullName: "批量赋值漏洞",
    severity: "高",
    category: "访问控制类",
    definition: "批量赋值漏洞发生在应用程序直接接收用户提交的额外参数，并把这些参数直接绑定到数据模型上，没有做过滤，攻击者可以通过添加额外的字段，修改敏感数据。",
    simpleDesc: "简单来说：你更新个人资料时，只提交了姓名和邮箱。但如果你额外加了 `role=admin` 或者 `is_vip=true` 这样的参数，服务器直接接收并修改了你的权限，这就是批量赋值漏洞。"
  }
];

export default function CommonVulnerabilities() {
  return (
    <div className="space-y-6">
      {/* 模块标题 */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">常见安全漏洞详解</h2>
      </div>

      {/* 漏洞卡片列表，完全还原原页面的卡片布局 */}
      <div className="space-y-4">
        {vulnerabilitiesList.map((vuln, index) => (
          <div 
            key={index} 
            className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:border-cyan-400/40 hover:shadow-sm transition-all"
          >
            {/* 头部：漏洞名称、标签 */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold font-mono">{vuln.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${severityConfig[vuln.severity].color}`}>
                    {severityConfig[vuln.severity].label}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryConfig[vuln.category].color}`}>
                    {vuln.category}
                  </span>
                </div>
                <p className="text-slate-400 font-medium">{vuln.fullName}</p>
              </div>
            </div>

            {/* 漏洞定义 */}
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-slate-400 mb-1">漏洞定义</h4>
              <p className="text-[#333]">{vuln.definition}</p>
            </div>

            {/* 通俗解释 */}
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
              <h4 className="text-sm font-semibold text-cyan-300 mb-1">通俗解释</h4>
              <p className="text-[#333]">{vuln.simpleDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}