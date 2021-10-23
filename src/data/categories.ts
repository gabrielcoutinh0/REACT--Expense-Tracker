import { Category } from '../Types/Category';

export const categories: Category = {
  grocery: { title: 'Mercado', color: '#4454c3', expense: true, icon: '🛒' },
  foodanddrink: { title: 'Comida e Bebida', color: '#ff7801', expense: true, icon: '🍴' },
  clothes: { title: 'Roupas', color: '#9d3bfa', expense: true, icon: '👚' },
  hotel: { title: 'Hotel', color: '#febe3c', expense: true, icon: '🏨' },
  medicine: { title: 'Remédio', color: '#fa545c', expense: true, icon: '💊' },
  fule: { title: 'Gasolina', color: '#964705', expense: true, icon: '⛽' },
  gifts: { title: 'Presentes', color: '#3bd0fa', expense: true, icon: '🎁' },
  travel: { title: 'Viagem', color: '#7550ff', expense: true, icon: '✈' },
  others: { title: 'Outros', color: '#e12cdf', expense: true, icon: '💸' },
  salary: { title: 'Salário', color: '#2dce89', expense: false, icon: '💰' },
}