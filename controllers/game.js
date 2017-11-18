/**
 * GET /game
 * Game page.
 */
exports.index = (req, res) => {
  res.render('game', {
    title: 'Game'
  });
};
