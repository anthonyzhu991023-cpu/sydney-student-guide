import { Search } from "lucide-react";

export function SearchBox({
  defaultValue = "",
  compact = false
}: {
  defaultValue?: string;
  compact?: boolean;
}) {
  return (
    <form action="/guides" className={compact ? "search-box compact" : "search-box"}>
      <Search aria-hidden="true" />
      <label className="sr-only" htmlFor={compact ? "guide-search-compact" : "guide-search"}>
        搜索攻略
      </label>
      <input
        id={compact ? "guide-search-compact" : "guide-search"}
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder="搜索租房、Opal、TFN、OSHC..."
      />
      <button type="submit">搜索</button>
    </form>
  );
}
