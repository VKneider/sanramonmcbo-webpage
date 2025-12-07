export type ChapelId =
  | 'divinaMisericordia'
  | 'nuestraSeñoraMerced'
  | 'sanPedroNolasco'
  | 'ermitaCarmen'
  | 'temploSanRamon';

export const chapelCardImages: Record<Exclude<ChapelId, 'temploSanRamon'>, string> = {
  divinaMisericordia:
    'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  nuestraSeñoraMerced:
    'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  sanPedroNolasco:
    'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ermitaCarmen:
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
};

export const chapelImages: Record<Exclude<ChapelId, 'temploSanRamon'>, string> = {
  divinaMisericordia:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
  nuestraSeñoraMerced:
    'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop',
  sanPedroNolasco:
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
  ermitaCarmen:
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
};

