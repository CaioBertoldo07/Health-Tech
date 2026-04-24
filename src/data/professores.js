import fotoAurea from '@/assets/images/professores/aurea.jpeg'
import fotoCuevas from '@/assets/images/professores/cuevas.jpeg'
import fotoDiana from '@/assets/images/professores/diana.jpeg'

const professores = [
  {
    id: 1,
    nome: 'Profa. Dra. Áurea Hiléia da Silva Melo',
    funcao: 'Tech Lead',
    bio: `Coordenadora do curso de Engenharia de Computação da EST-UEA. Coordenadora do NIPNE/EST-UEA. Coordenadora geral do Health Tech Center.

Áreas de atuação: Inteligência Artificial, Sistemas de recomendação, Classificação, Desenvolvimento de software, Banco de dados, Engenharia de dados, IoT e wearables, Acessibilidade e interação humano-computador.`,
    lattesUrl: 'http://lattes.cnpq.br/0243106634406881',
    foto: fotoAurea,
  },
  {
    id: 2,
    nome: 'Prof. Dr. Luis Cuevas Rodriguez',
    funcao: 'Inteligência Artificial',
    bio: 'Professor do curso de Engenharia de Computação da EST-UEA. Atua nas áreas de Inteligência Artificial, aprendizado de máquina e visão computacional aplicados à saúde.',
    lattesUrl: 'http://lattes.cnpq.br/0083210163583491',
    foto: fotoCuevas,
  },
  {
    id: 3,
    nome: 'Profa. Dra. Diana Maria Camara de Carvalho',
    funcao: 'Engenharia de Software',
    bio: 'Professora do curso de Engenharia de Computação da EST-UEA. Atua nas áreas de Engenharia de Software, sistemas de informação em saúde e desenvolvimento de aplicações digitais.',
    lattesUrl: 'http://lattes.cnpq.br/2666344751408314',
    foto: fotoDiana,
    objectPosition: 'object-[50%_20%]',
  },
]

export default professores
