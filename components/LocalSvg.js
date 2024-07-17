import React from 'react';
import A from '../assets/svgler/a.svg';
import AB from '../assets/svgler/ab.svg';
import CB from '../assets/svgler/cb.svg';
import DMN from '../assets/svgler/dmn.svg';
import DY from '../assets/svgler/dy.svg';
import GKR from '../assets/svgler/gkr.svg';
import GSY from '../assets/svgler/gsy.svg';
import HKY from '../assets/svgler/hky.svg';
import HSY from '../assets/svgler/hsy.svg';
import HY from '../assets/svgler/hy.svg';
import K from '../assets/svgler/k.svg';
import KF from '../assets/svgler/kf.svg';
import KGY from '../assets/svgler/kgy.svg';
import KKR from '../assets/svgler/kkr.svg';
import KKY from '../assets/svgler/kky.svg';
import KSY from '../assets/svgler/ksy.svg';
import KY from '../assets/svgler/ky.svg';
import MSY from '../assets/svgler/msy.svg';
import PB from '../assets/svgler/pb.svg';
import PUS from '../assets/svgler/pus.svg';
import R from '../assets/svgler/r.svg';
import SCK from '../assets/svgler/sck.svg';
import SGK from '../assets/svgler/sgk.svg';
import SIS from '../assets/svgler/sis.svg';
import SY from '../assets/svgler/sy.svg';
import Y from '../assets/svgler/y.svg';
import YKY from '../assets/svgler/yky.svg';

const svgs = {
  a: A,
  ab: AB,
  cb: CB,
  dmn: DMN,
  dy: DY,
  gkr: GKR,
  gsy: GSY,
  hky: HKY,
  hsy: HSY,
  hy: HY,
  k: K,
  kf: KF,
  kgy: KGY,
  kkr: KKR,
  kky: KKY,
  ksy: KSY,
  ky: KY,
  msy: MSY,
  pb: PB,
  pus: PUS,
  r: R,
  sck: SCK,
  sgk: SGK,
  sis: SIS,
  sy: SY,
  y: Y,
  yky: YKY,
};

export const svgCodes = [
  ['a', 'Açık'],
  ['sck', 'Sıcak'],
  ['sgk', 'Soğuk'],
  ['ab', 'Az Bulutlu'],
  ['pb', 'Parçalı Bulutlu'],
  ['cb', 'Çok Bulutlu'],
  ['hy', 'Hafif Yağmurlu'],
  ['y', 'Yağmurlu'],
  ['ky', 'Kuvvetli Yağmurlu'],
  ['msy', 'Yer Yer Sağanak Yağışlı'],
  ['hsy', 'Hafif Sağanak Yağışlı'],
  ['sy', 'Sağanak Yağışlı'],
  ['ksy', 'Kuvvetli Sağanak Yağışlı'],
  ['gsy', 'Gökgürültülü Sağanak Yağışlı'],
  ['kgy', 'Kuvvetli Gökgürültülü Sağanak'],
  ['kky', 'Karla Karışık Yağmurlu'],
  ['hky', 'Hafif Kar Yağışlı'],
  ['k', 'Kar Yağışlı'],
  ['yky', 'Yoğun Kar Yağışlı'],
  ['dy', 'Dolu'],
  ['dmn', 'Dumanlı'],
  ['pus', 'Puslu'],
  ['sis', 'Sisli'],
  ['r', 'Rüzgarlı'],
  ['kf', 'Toz veya Kum Fırtınası'],
  ['gkr', 'Güneylü Kuvvetli Rüzgar'],
  ['kkr', ' Kuzeyli Kuvvetli Rüzgar'],
];

const Icon = ({name, width, height}) => {
  const SvgIcon = svgs[name];

  if (!SvgIcon) {
    return null;
  }

  return <SvgIcon width={width} height={height} />;
};

export default Icon;
