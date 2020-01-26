import Vue, { VNode } from 'vue';
import * as tsx from "vue-tsx-support";
import { Component, Prop, Watch } from 'vue-property-decorator';

export interface MyComponentProps {
    title: string;
}


@Component
export default class MyComponent extends tsx.Component<MyComponentProps>{

    @Prop() title!: string;

    render() {
        return (
            <v-row>
                {this.title}
            </v-row>
        )
    }
}