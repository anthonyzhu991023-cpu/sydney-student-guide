import Link from "next/link";

const navItems = [
  ["首页", "/"],
  ["新手村任务", "/categories/arrival"],
  ["租房避坑", "/categories/housing"],
  ["交通出行", "/categories/transport"],
  ["打工税号", "/categories/work-money"],
  ["校园生活", "/categories/study-campus"],
  ["费用清单", "/guides?q=费用"]
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="悉尼生存攻略首页">
        <span className="brand-mark">悉</span>
        <span>悉尼生存攻略</span>
      </Link>
      <nav className="main-nav" aria-label="主导航">
        {navItems.map(([label, href]) => (
          <Link href={href} key={label}>
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/guides" className="nav-action">
        搜索攻略
      </Link>
    </header>
  );
}
