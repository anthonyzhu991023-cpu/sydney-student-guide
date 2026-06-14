const tasks = [
  ["第 0 天", "保存证件、学校文件、住宿地址和紧急联系人。"],
  ["第 1 天", "办理电话卡、银行卡，确认 Opal 或银行卡通勤方式。"],
  ["第 3 天", "熟悉学校、超市、车站和附近诊所。"],
  ["第 7 天", "检查租房合同、账单分摊和长期生活预算。"]
];

export function QuestLog() {
  return (
    <section className="section split-section" aria-labelledby="quest-log-title">
      <div className="section-heading align-left">
        <p className="section-kicker">新手任务</p>
        <h2 id="quest-log-title">落地一周，不靠玄学通关</h2>
        <p>把最容易慌的事情拆成短任务：先稳定住处、网络、交通和钱，再处理学校和生活细节。</p>
      </div>
      <ol className="quest-log">
        {tasks.map(([day, copy]) => (
          <li key={day}>
            <span>{day}</span>
            <p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
