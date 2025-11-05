import type { OverlaySpinProps } from '@/OverlaySpin';

export const getOverlaySpinProps = (loading?: boolean | OverlaySpinProps) => {
  if (!loading) return;
  if (typeof loading === 'boolean') {
    return { spinning: loading };
  }
  return loading;
};
