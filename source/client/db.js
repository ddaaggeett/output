import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: false
});

horizon.connect();

export default horizon;

export const blooprints = horizon('blooprints')
export const blips = horizon('blips')
export const designSettings = horizon('designSettings')
