import Vue, { VNode } from 'vue';
import * as tsx from "vue-tsx-support";
import { Component, Prop, Watch } from 'vue-property-decorator';



export interface DefaultLayoutOptions {

}


@Component
export default class DefaultLayout extends tsx.Component<DefaultLayoutOptions>{

    
    render() {

       

        return (
            <v-app>
                <v-app-bar app clipped-left color="#f87f2e">

                   

                </v-app-bar>
             
                <v-content>
                    <v-container fluid class="grey lighten-4">
                        <v-row justify="center" alight="center">
                            <v-col class="">
                                <nuxt />
                            </v-col>
                        </v-row>
                      
                        </v-container>
                </v-content>

            </v-app>

        )

    }
}