import Link from "next/link";
import { PixelIcon } from "@/components/icons";
import type { Category } from "@/types/content";

export function CategoryMap({ categories }: { categories: Category[] }) {
  return (
    <section className="section map-section" aria-labelledby="map-title">
      <div className="section-heading">
        <p className="section-kicker">任务地图</p>
        <h2 id="map-title">按关卡进入悉尼生活</h2>
        <p>每个主题都是一个可通关的生活副本，先解决高风险问题，再慢慢探索城市。</p>
      </div>
      <div className="quest-map">
        {categories.map((category, index) => (
          <Link
            href={`/categories/${category.slug}`}
            className="quest-node"
            key={category.slug}
            style={{ ["--node-index" as string]: index }}
          >
            <span className="node-icon">
              <PixelIcon name={category.icon} />
            </span>
            <span className="node-copy">
              <strong>{category.title}</strong>
              <span>{category.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
