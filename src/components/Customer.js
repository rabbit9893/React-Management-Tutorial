import React from 'react';

class Customer extends React.Component {
    render() {
        return (    /* render 함수 안에는 return을 꼭 해줘야함 */
            <div>   
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
            /* 하나의 컴포넌트를 작성 */
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;