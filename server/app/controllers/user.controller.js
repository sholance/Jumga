exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.SellerBoard = (req, res) => {
    res.status(200).send("Seller Content.");
  };
  exports.BuyerBoard = (req, res) => {
    res.status(200).send("Buyer Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };