/**
 * GET /payments
 *
 */
exports.index = (req, res) => {
  res.render('payments', {
    title: 'Payments'
  });
};
