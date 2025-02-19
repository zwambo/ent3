import Hand from './Hand';
import Auction from './Auction';

function DealViewer() {
  return (
    <div class="border p-2 mt-4">
      <h2>Donne</h2>
      <div class="flex space-x-4">
        <Hand />
        <Hand />
        <Hand />
        <Hand />
      </div>
      <Auction />
    </div>
  );
}

export default DealViewer;