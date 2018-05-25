import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/productDetail";

let URI = "http://172.16.105.196:4000";

class ProductDetail extends React.Component {
  //static navigationOptions = { title: "Product Detail" };
  static navigationOptions = ({ navigation }) => ({
    title: `Product Detail for ${navigation.state.params.id}`
  });

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions } = this.props;
    let { id } = this.props.navigation.state.params;
    actions.getproductid (id);
    /*console.log(id);
    fetch(`${URI}/products/${id}`)
      .then(r => r.json())
      .then(product =>
        this.setState({ product, isLoading: false })
      );*/
  }

  renderProduct() {
    const { navigation, productDetail } = this.props;
    return (<View>
      <Image
        source={productDetail.image ? { uri: `${URI}/images/${productDetail.image}` } : require("../assets/barcode.png")}
        style={{ height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{productDetail.id} - {productDetail.title}</Text>
      <Text style={[styles.title, { fontSize: 16 }]}>
        {productDetail.additionalInfo && `(${productDetail.additionalInfo})`}
      </Text>
    </View>)
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            this.renderProduct()
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 10
  },
  title: {
    fontSize: 24,
    padding: 10
  }
});

function mapStateToProps(state) {
  return {
    productDetail: state.productDetailState.productDisplay,
    isLoading: state.productDetailState.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductDetail
);


//export default ProductDetail;
