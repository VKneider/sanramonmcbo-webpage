// Importar información de capillas
import { chapelInfo as temploSanRamonInfo } from './temploSanRamon/info';

import { apostolateData as cofradiaDelCorazonDeJesudData } from './temploSanRamon/cofradia-del-corazon-de-jesud';
import { apostolateData as coroInfantilSanRamonNonatoData } from './temploSanRamon/coro-infantil-san-ramon-nonato';
import { apostolateData as movimientoDeEspiritualidadMatrimonialMemData } from './temploSanRamon/movimiento-de-espiritualidad-matrimonial-mem';
import { apostolateData as jovenesDeAccionCatolicaMercedariaData } from './temploSanRamon/jovenes-de-accion-catolica-mercedaria';
// Información de capillas
export const chapelInfos = {
  temploSanRamon: temploSanRamonInfo,
};
// Apostolados organizados por capilla (solo del Excel)
export const chapelApostolates = {
  temploSanRamon: {
    title: temploSanRamonInfo.es.title,
    apostolates: {
      cofradiaDelCorazonDeJesud: cofradiaDelCorazonDeJesudData,
      coroInfantilSanRamonNonato: coroInfantilSanRamonNonatoData,
      movimientoDeEspiritualidadMatrimonialMem: movimientoDeEspiritualidadMatrimonialMemData,
      jovenesDeAccionCatolicaMercedaria: jovenesDeAccionCatolicaMercedariaData,
    }
  },
};
export type ChapelApostolates = typeof chapelApostolates;
export type ChapelInfos = typeof chapelInfos;