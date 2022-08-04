function formatObject(object: any) {
  const formattedObject = {
    axieId: object.id,
    name: object.name,
    stage: object.stage,
    class: object.class,
    currentPrice: object.auction.currentPriceUSD,
  };
  return formattedObject;
}

export default formatObject;
