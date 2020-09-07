export enum TribeCategory {
  RIDE = 'RIDE',
  SNOW = 'SNOW',
  SURF = 'SURF',
  PARK = 'PARK',
}

export const VERT = 'VERT';

export const TribeCategoryIconMap = {
  [TribeCategory.RIDE]: '/assets/podium-icons/podium-text-ride.svg',
  [TribeCategory.RIDE + VERT]: '/assets/podium-icons/podium-text-ride-vert.svg',
  [TribeCategory.SNOW]: '/assets/podium-icons/podium-text-snow.svg',
  [TribeCategory.SNOW + VERT]: '/assets/podium-icons/podium-text-snow-vert.svg',
  [TribeCategory.SURF]: '/assets/podium-icons/podium-text-surf.svg',
  [TribeCategory.SURF + VERT]: '/assets/podium-icons/podium-text-surf-vert.svg',
  [TribeCategory.PARK]: '/assets/podium-icons/podium-text-park.svg',
  [TribeCategory.PARK + VERT]: '/assets/podium-icons/podium-text-park-vert.svg',
};
