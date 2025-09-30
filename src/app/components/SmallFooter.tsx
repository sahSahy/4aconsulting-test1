export default function SmallFooter() {
  return (
    <div className="p-5 flex flex-col text-2xl gap-y-7 border border-[#484D4E] rounded-4xl ">
      <h3 className="px-8 py-4 border text-[#81FE95] border-[#81FE95] w-max rounded-4xl text-[28px]">
        гарантия возврата 30 дней
      </h3>
      <p className="font-normal text-[#DCDCDC] text-2xl leading-[1.3]">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
}
