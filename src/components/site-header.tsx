import Link from "next/link";

const navItems = [
  ["首页", "/"],
  ["任务地图", "/#quest-map"],
  ["新手任务", "/categories/arrival"],
  ["租房避坑", "/categories/housing"],
  ["Opal交通", "/categories/transport"],
  ["TFN打工", "/categories/work-money"],
  ["后台", "/studio"],
  ["全部攻略", "/guides"]
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
      <Link href="/studio" className="nav-action">
        内容后台
      </Link>
    </header>
  );
}
