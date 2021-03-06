import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Picker,Alert,Text,Platform, ActivityIndicator } from 'react-native';
import * as addProductActionCreator from '../actionCreators/addProduct';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

let URI = "http://172.16.105.196:4000";

class AddProduct extends Component {
  static navigationOptions= {
    title: "Add",
    headerStyle: {
      backgroundColor: "#00ff80"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      titleError:null,
      category: 'Mobiles',
      additionalInfo: '',
      categories: ['Mobiles', 'Laptops', 'Desktops', 'Others'],
      price:''
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(!prevProps.addProductsuccessFlag && this.props.addProductsuccessFlag){
      Alert.alert('Success','Product Saved Successfully');
      this.resetForm();
    }
  }

  resetForm = () => {    
    this.setState({
      title: '',
      category: this.state.categories[0],
      additionalInfo: '',
      price: ''
    })
  }

  handleSubmit = () => {
    const {actions} = this.props;
    let {
      title,
      category,
      additionalInfo,
      price
    } = this.state;
    if(!title){
      this.setState({titleError:'Title is required'})
      return;
    }
    const product = {
      title,
      category,
      additionalInfo,
      price
    }
    actions.addProduct(product);
    // fetch(`${URI}/products`, {
    //   body: JSON.stringify({
    //     title,
    //     category,
    //     additionalInfo,
    //     price
    //   }),
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    // }).then(p => {Alert.alert('Success','Product Saved Successfully')})
  }

  renderCategories = () => {
    return this.state.categories.map(c => <Picker.Item key={c} label={c} value={c} />)
  }
  render() {
    const {isLoading} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.control}
          onChangeText={(title) => {
            this.setState({ title,titleError:null })
            if(title.length==0){
              this.setState({ titleError:'Title is required' })
            }
          }}
          value={this.state.title}
          placeholder="Product Name"
          placeholderTextColor="grey"
        />
        {this.state.titleError && <Text style={{color:'red'}}>Title is required</Text>}
        <TextInput
          numberOfLines={5}
          onChangeText={(additionalInfo) => this.setState({ additionalInfo })}
          multiline={true}
          value={this.state.additionalInfo}
          placeholder="Additional Info"
          placeholderTextColor="grey"
          style={styles.additionalInfo}
        />
        <TextInput
          style={styles.control}
          onChangeText={(price) => this.setState({ price })}
          value={this.state.price}
          placeholder="Product Price"
          placeholderTextColor="grey"
          keyboardType="number-pad"
        />
        <Picker
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
          {this.renderCategories()}
        </Picker>
        <Button
          title="Add"
          onPress={this.handleSubmit}
        />
        {isLoading ? <ActivityIndicator /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "stretch",
    backgroundColor: '#ffffff',
  },
  control:{
    ...Platform.select({
      android:{
        height:40
      },
      ios:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'grey',
        marginTop:20,
        marginBottom:20
      }
    })
  },
  additionalInfo:{
    ...Platform.select({
      ios:{
        height:80
      }
    })
  }
});



function mapStateToProps(state) {
  return {
    isLoading: state.addProductState.isLoading,
    addProductsuccessFlag: state.addProductState.addProductsuccessFlag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addProductActionCreator, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
   AddProduct
);
