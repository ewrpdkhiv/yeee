function mapItems(itemList, isBanner = false) {
  itemList?.forEach?.((ie) => {
    if (isBanner) {
      removeBanner(ie?.g2F117866661);
    } else {
      removeAd(ie?.n4F50195462);
      removeAd(ie?.n4F51845067?.n5F5?.n6F51431404);
    }
  });
}

function removeBanner(itemObject) {
  if (itemObject?.g3F1) itemObject.g3F1 = itemObject.g3F1?.filter((o) => isNotUpload(o));
}