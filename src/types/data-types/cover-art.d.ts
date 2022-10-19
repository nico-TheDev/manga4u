import { AttributeBase } from '@/types/base';

export interface CoverArtAttributes extends AttributeBase {
  description?: string;
  volume?: string;
  fileName: string;
  urls: string[];
}
