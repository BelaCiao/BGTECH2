
import { DeviceType, ReviewStats, ServiceItem } from './types';

export const BRANDS_MAP: Record<DeviceType, string[]> = {
  [DeviceType.PC]: ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Customizado/Montado', 'Outra'],
  [DeviceType.NOTEBOOK]: ['Dell', 'Samsung', 'Lenovo', 'Acer', 'Asus', 'Apple (Macbook)', 'Positivo', 'Outra'],
  [DeviceType.TV]: ['Samsung', 'LG', 'TCL', 'Sony', 'Philips', 'Panasonic', 'AOC', 'Outra'],
  [DeviceType.MICROONDAS]: ['Electrolux', 'Brastemp', 'Panasonic', 'Midea', 'Consul', 'Philco', 'Outra'],
  [DeviceType.AUDIO]: ['JBL', 'Sony', 'LG', 'Samsung', 'Pioneer', 'Yamaha', 'Outra'],
  [DeviceType.OUTROS]: ['Marca não listada/Genérica']
};

export const DEFECTS_MAP: Record<DeviceType, string[]> = {
  [DeviceType.PC]: ['Não liga', 'Tela Azul / Travando', 'Lentidão', 'Superaquecimento', 'Upgrade de Peças', 'Formatação', 'Outro'],
  [DeviceType.NOTEBOOK]: ['Tela Quebrada', 'Teclado Falhando', 'Bateria não carrega', 'Não liga', 'Dobradiça quebrada', 'Lentidão', 'Outro'],
  [DeviceType.TV]: ['Sem imagem (com som)', 'Não liga', 'Tela quebrada/trincada', 'Sem som', 'Problema no Wi-Fi', 'Listras na tela', 'Outro'],
  [DeviceType.MICROONDAS]: ['Não esquenta', 'Não liga', 'Prato não gira', 'Painel não funciona', 'Fazendo barulho estranho', 'Saindo faísca', 'Outro'],
  [DeviceType.AUDIO]: ['Não liga', 'Sem som', 'Ruído/Chiado', 'Bluetooth não conecta', 'Botões falhando', 'Outro'],
  [DeviceType.OUTROS]: ['Defeito não listado', 'Avaliação geral']
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'PC Gamer & Desktops',
    description: 'Montagem profissional, cable management, limpeza química, water cooler e upgrades de alta performance.',
    image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Notebooks e Laptops',
    description: 'Troca de telas, teclados, reparo de placa-mãe, BGA, formatação e otimização de sistema.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'Smart TVs 4K/8K',
    description: 'Reparo de barramento de LEDs, fontes de alimentação e placas principais. Diagnóstico preciso.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    title: 'Eletrônicos em Geral',
    description: 'Manutenção em microondas, caixas de som, amplificadores e sistemas de áudio profissional.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEW_STATS: ReviewStats[] = [
  { stars: 5, percentage: 86 },
  { stars: 4, percentage: 0 },
  { stars: 3, percentage: 14 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

export const WHATSAPP_NUMBER = "5553999335369";