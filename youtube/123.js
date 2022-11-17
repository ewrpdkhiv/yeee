
function mapItems(itemList) {
function mapItems(itemList, isBanner = false) {
  itemList?.forEach?.((ie) => {
  itemList?.forEach?.((ie) => {
    removeAd(ie?.n4F50195462);
    if (isBanner) {
    removeAd(ie?.n4F51845067?.n5F5?.n6F51431404);
      removeBanner(ie?.g2F117866661);
    } else {
      removeAd(ie?.n4F50195462);
      removeAd(ie?.n4F51845067?.n5F5?.n6F51431404);
    }
  });
  });
}
}


function removeAd(itemObject) {
function removeAd(itemObject) {
  if (itemObject?.n5F1) itemObject.n5F1 = itemObject.n5F1?.filter((o) => isVideo(o));
  if (itemObject?.n5F1) itemObject.n5F1 = itemObject.n5F1?.filter((o) => isVideo(o));
}
}


function removeBanner(itemObject) {
  if (itemObject?.g3F1) itemObject.g3F1 = itemObject.g3F1?.filter((o) => isNotUpload(o));
}

