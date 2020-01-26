import Vue, { VNode } from 'vue';
import * as tsx from "vue-tsx-support";
import { Component, Prop, Watch } from 'vue-property-decorator';
import MyComponent from '../components/MyComponent';

export interface IndexPageProps {

}


@Component
export default class IndexPage extends tsx.Component<IndexPageProps>{

  
    render() {
        return (
            <MyComponent title={'hello'} />
        )
    }
}