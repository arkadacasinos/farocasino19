import type { Metadata } from 'next'

const PAGE_TITLE =
  'Faro Casino официальный сайт — играть онлайн, рабочее зеркало Фаро Казино 24/7'

const PAGE_DESCRIPTION =
  'Faro Casino официальный сайт приглашает играть онлайн: слоты, рулетка и карты в Фаро казино. Рабочее зеркало Фаро казино быстро откроет вход, выплаты приходят без задержек и комиссий круглосуточно.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://farocasino19.vercel.app/',
    siteName: 'Faro Casino',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: '/art/faro-table.png',
        width: 1408,
        height: 768,
        alt: 'Зелёное сукно игрового стола Faro Casino с картами и фишками',
      },
    ],
  },
}

export default function FaroCasinoLanding() {
  return (
    <main className="q7v-shell" id="top">
      <header className="q7v-hero">
        <p className="q7v-kicker">Faro Casino · вход открыт круглосуточно</p>
        <h1 className="q7v-h1">Faro Casino официальный сайт — вход, зеркало и игра онлайн</h1>
        <p className="q7v-lead">
          Faro Casino официальный сайт открывает вход к слотам, рулетке и карточным столам без
          лишних шагов. Игрок получает честные коэффициенты, быстрые выплаты и поддержку на русском
          языке. Если основной адрес недоступен, Фаро казино зеркало рабочее открывает запасной вход
          за пару секунд, без VPN и регистраций заново.
        </p>
        <img
          className="q7v-art"
          src="/art/faro-table.png"
          alt="Зелёное сукно игрового стола Faro Casino с картами и фишками"
          width={1408}
          height={768}
          fetchPriority="high"
        />
      </header>

      <section className="q7v-sec" id="sajt">
        <h2 className="q7v-h2">Faro Casino официальный сайт: что ждёт игрока внутри</h2>
        <p className="q7v-txt">
          Faro Casino официальный сайт собран просто: каталог слотов, живые столы и crash-игры лежат
          на главной странице, без скрытых разделов. Faro Casino официальный статус подтверждает
          лицензия и прозрачные правила выплат. Новичку хватает пяти минут, чтобы разобраться:
          регистрация короткая, а демо-режим открыт даже без счёта. Фаро казино не прячет условия в
          мелком шрифте.
        </p>
      </section>

      <section className="q7v-sec" id="zerkalo">
        <h2 className="q7v-h2">Faro Casino зеркало — запасной вход без блокировок</h2>
        <p className="q7v-txt">
          Faro Casino зеркало — это точная копия площадки на другом адресе: тот же счёт, те же слоты
          и та же история ставок. Faro Casino зеркало включают, когда провайдер ограничивает
          основной домен, поэтому вход через него безопасен и не требует нового аккаунта. Сохраните
          актуальную ссылку в закладках, и Faro Casino зеркало откроется мгновенно.
        </p>
        <img
          className="q7v-art"
          src="/art/faro-mirror.png"
          alt="Зеркальный вход Faro Casino: две одинаковые двери в игровой зал"
          width={1408}
          height={768}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="q7v-sec" id="igrat">
        <h2 className="q7v-h2">Faro Casino играть бесплатно и на деньги</h2>
        <p className="q7v-txt">
          Faro Casino играть предлагает прямо в браузере: ничего скачивать не нужно ни на телефоне,
          ни на компьютере. В демо Faro Casino играть можно без депозита, чтобы понять механику
          слота и его отдачу. Когда решение созрело, игра на деньги открывается теми же кнопками, а
          лимиты ставок подходят и новичку, и опытному игроку.
        </p>
      </section>

      <section className="q7v-sec" id="zerkalo-rabochee">
        <h2 className="q7v-h2">Фаро казино зеркало рабочее: как войти за минуту</h2>
        <p className="q7v-txt">
          Фаро казино зеркало рабочее проверяется просто: страница открывается, показывает ваш
          баланс и не просит создавать второй аккаунт. Фаро казино зеркало рабочее всегда совпадает
          с основным сайтом по оформлению и списку игр, поэтому подделку видно сразу. Если адрес не
          открылся, обновите страницу или возьмите свежую ссылку из рассылки — Фаро казино зеркало
          рабочее появляется там первым.
        </p>
      </section>

      <section className="q7v-sec" id="igrat-onlain">
        <h2 className="q7v-h2">Фаро казино играть онлайн без скачивания</h2>
        <p className="q7v-txt">
          Фаро казино играть позволяет с любого экрана: интерфейс подстраивается под телефон,
          планшет и компьютер сам. Фаро казино играть онлайн удобно даже в дороге: слоты
          загружаются быстро, а кнопки управления крупные и не скользят под пальцем. Сессия не
          обрывается при переключении вкладок, поэтому доиграть раунд можно позже с того же места.
        </p>
        <img
          className="q7v-art"
          src="/art/faro-phone.png"
          alt="Смартфон с открытыми слотами Faro Casino в руке игрока"
          width={1408}
          height={768}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="q7v-sec" id="onlain">
        <h2 className="q7v-h2">Фаро казино онлайн круглосуточно и без перерывов</h2>
        <p className="q7v-txt">
          Фаро казино онлайн работает 24/7: технические окна короткие и объявляются заранее. Фаро
          казино онлайн держит стабильную скорость даже в вечерний пик, когда за столами больше
          всего игроков. Поддержка отвечает в чате за пару минут, а вопросы по выплатам закрывает
          тот же специалист, без переключений между отделами.
        </p>
      </section>

      <section className="q7v-sec" id="vyplaty">
        <h2 className="q7v-h2">Фаро казино официальный сайт: выплаты и поддержка</h2>
        <p className="q7v-txt">
          Фаро казино официальный сайт выводит выигрыши тем же способом, которым пополняли счёт:
          карта, СБП или криптокошелёк. Фаро казино официальный статус обязывает держать сроки:
          заявка обрабатывается до суток, а большинство приходит за час. Фаро казино официальный
          сайт хранит правила выплат в одном разделе, без сюрпризов и скрытых комиссий.
        </p>
      </section>

      <footer className="q7v-foot">
        <p className="q7v-foot-title">Хештеги для поиска по сайту</p>
        <nav aria-label="Хештеги для поиска по сайту">
          <ul className="q7v-tags">
            <li>
              <a className="q7v-tag" href="#top">
                #FaroCasino
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#zerkalo">
                #FaroCasinoЗеркало
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#igrat">
                #FaroCasinoИграть
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#sajt">
                #FaroCasinoОфициальный
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#sajt">
                #FaroCasinoОфициальныйСайт
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#top">
                #ФароКазино
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#zerkalo-rabochee">
                #ФароКазиноЗеркало
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#zerkalo-rabochee">
                #ФароКазиноЗеркалоРабочее
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#igrat-onlain">
                #ФароКазиноИграть
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#onlain">
                #ФароКазиноОнлайн
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#vyplaty">
                #ФароКазиноОфициальный
              </a>
            </li>
            <li>
              <a className="q7v-tag" href="#vyplaty">
                #ФароКазиноОфициальныйСайт
              </a>
            </li>
          </ul>
        </nav>
        <p className="q7v-note">
          18+ Играйте ответственно. © 2026 Faro Casino. Материалы сайта носят информационный
          характер.
        </p>
      </footer>
    </main>
  )
}
