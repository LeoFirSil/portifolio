import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam
      tempora pariatur fuga, rem, exercitationem dignissimos neque reiciendis
      iure ex ea sunt debitis ut quos quod veritatis, quae dolor aliquam.
    </Paragrafo>
    <GitubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=LeoFirSil&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LeoFirSil&layout=compact&langs_count=6&theme=tokyonight" />
    </GitubSecao>
  </section>
)

export default Sobre
