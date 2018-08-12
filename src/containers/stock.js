import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StockTable } from '../components/stock';

const mapStateToProps = (state) => {

  return {
    isLoading: state.stock.isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({

  }, dispatch)
});

export const StockTableContainer = connect(mapStateToProps, mapDispatchToProps)(StockTable);
