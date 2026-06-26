# SP-API 审核对齐备忘 (SkuFx 官网)

> 目的：记录官网为 Amazon SP-API「解决方案提供商」审核所做的对齐，确保**官网 ↔ 开发者档案申请 ↔ 真实基础设施**三方一致。改官网内容前先看这份，别再引入对不上的信息。

最后更新：2026-06-26

---

## 1. 公司主体（必须和开发者档案一字一致）

- 中文（法律名）：**辽阳普维商贸有限公司**
- 英文（译名）：Liaoyang Puwei Trading Co., Ltd.
- 注册地：辽宁省辽阳市文圣区
- 官网统一用 `COMPANY.name = "辽阳普维商贸有限公司 (Liaoyang Puwei Trading Co., Ltd.)"`（`src/lib/content.ts`），全站引用它。

## 2. 真实基础设施（这是唯一权威清单）

| 角色 | 供应商 | 备注 |
|---|---|---|
| 营销官网托管 | **Vercel** (Next.js) | www.skufx.com，响应头 `server: Vercel` |
| 应用 + API + 数据库 | **RackNerd LLC**（美国 VPS）| app/api.skufx.com，Ubuntu+nginx，**所有 SP-API 卖家数据 + PostgreSQL 都在这** |
| DNS | **阿里云 / Aliyun**（dns3/4.hichina.com）| 不是 Cloudflare |
| 企业邮箱 | **腾讯企业邮箱 / Tencent Exmail**（MX mxbiz1/2.qq.com）| 不是 Google Workspace |
| 错误监控 | **Sentry** | PII 已脱敏 |
| 源代码 | **GitHub** | |
| 公开竞品数据采集 | Bright Data / SellerSprite | 仅取公开数据；不列入子处理方 |
| AI | 仅处理公开、非 PII 的商品文本；**绝不接触 SP-API 数据** | |

🚫 **全程没有 Cloudflare、没有 Google Workspace。** 任何页面/表单都不得声称用了它们。

## 3. 本次实际申请的 4 个 SP-API 角色（官方名）

官网角色清单(`SP_API_ROLES`)与每个功能的 SP-API 标签都必须只用这 4 个：

1. **Inventory & Order Tracking**（库存和订单追踪）— 订单、FBA 库存量、可售/在途。FBA 库存归这里，**不需要**「亚马逊物流 / Amazon Fulfillment」角色。
2. **Selling Partner Insights**（洞察销售伙伴）— 账户与绩效。
3. **Finance & Accounting**（财务与会计核算）— P&L、结算、利润。
4. **Product Listing**（商品信息）— 经卖家批准后发布 listing + A+（用于即将上线的 AI Listing 功能）。

❌ 未申请、官网也不得出现为 SP-API 角色的：Pricing（定价）、Brand Analytics（品牌分析）、Catalog、Notifications。
（注：关键词机会分析用的是 Brand Analytics **CSV 上传**，不是 SP-API；跟卖/竞品/选品靠爬虫；广告分析靠邮箱转发报表——这些功能都标「No Amazon account required」。）

## 4. 功能 ↔ 真实模块 ↔ 数据来源

| 官网功能 | 真实模块 | 状态 | 来源 |
|---|---|---|---|
| Keyword Opportunity Analyzer | 选品 | 现已可用 | Brand Analytics CSV + 爬虫（非 SP-API）|
| New Product Development Pipeline | 新品 | 现已可用 | 爬虫 + AI |
| Competitor & Product Tracking | 收藏 | 现已可用 | 爬虫（价格/BSR 趋势）|
| Seller & Listing Monitoring | 监控 | 现已可用 | 爬虫 + 告警 |
| Ad Report Analysis | 广告 | 现已可用 | 邮箱转发报表 + AI |
| Business Performance Dashboard | 首页/业绩 | 部分可用 | 现靠上传报表；实时靠 SP-API |
| FBA Inventory / Order Mgmt / Finance | ERP | 即将上线 | SP-API（上述 4 角色）|
| AI-Assisted Listing Publisher | 新品流程 | 即将上线 | SP-API Product Listing（经批准）|

截图：用 demo 账号（英文、安全假数据）截的真实界面，存 `public/mockups/`。即将上线功能用设计稿并叠「PREVIEW · COMING」标。

## 5. 官网合规要点（已满足）

- 公开可访问、非「仅登录」、非「在建中」（Early Access 措辞合规）
- HTTPS、隐私政策(DPP)、服务条款、Cookie、DPA、子处理方页齐全
- 定价页 `/pricing`（报价制）+ 导航/页脚入口
- 联系方式（/contact + support@skufx.com）
- 无死链（Calendly 占位链接已移除）
- 子处理方/DPA = 真实基础设施（见第 2 节），无 Cloudflare/Google Workspace

## 6. 维护规则（以后改官网注意）

1. 改公司名 → 只改 `COMPANY.name`，并确保和开发者档案一致。
2. 改 SP-API 角色 → 同时改 `SP_API_ROLES`、每个功能的 `spApiRoles`、`/security` 的数据保留句、以及开发者档案，保持四处一致。
3. 永不声称未使用的服务（Cloudflare/Google Workspace/未申请的 SP-API 角色）。
4. 爬虫/CSV/AI 功能必须标「No Amazon account required」，不得写成走 SP-API。
5. 截图只用 demo 账号（无真实卖家财务/邮箱/竞品名）。

## 7. 开发者档案表单待办（提交前由人工在 Seller/Solution Provider Portal 完成）

- [ ] 用例里补一段 **PRODUCT LISTING** 用途说明
- [ ] 「共享方」那段**删掉 Cloudflare**（只留 RackNerd + Sentry）
- [ ] 核实安全控制 7 项都属实（IDS/IPS、网络分段、MFA、365 天密码轮换 等）
- [ ] 确认联系邮箱（gehao93 vs gehao95）
- [ ] 第二个框措辞：爬虫数据「仅用于聚合市场研究，绝不获取卖家私有数据/买家信息」
