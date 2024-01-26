import { TrophyOutlined } from '@ant-design/icons';

export interface IGifTypeLabelProps {
  totalCount: number;
  isSearching: boolean;
}

export default function GifTypeLabel({ isSearching, totalCount }: IGifTypeLabelProps) {
  return (
    <div className="mb-4 text-xl font-bold text-purple-primary">
      {isSearching ? (
        <div>Result images found: {totalCount}</div>
      ) : (
        <div>
          <TrophyOutlined className="mr-2 text-2xl text-orange-400 animate-bounce" />
          <span>Trending</span>
        </div>
      )}
    </div>
  );
}
