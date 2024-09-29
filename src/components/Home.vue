<template>
    <v-container fluid class="pa-0">
        <div class="header">
           <h2> AI Code Reviewer </h2>
        </div>
  
      <v-container class="mt-5">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pa-5">
              <v-select
                v-model="namees"
                :items="repoName"
                label="Select Your Repository"
                outlined
                dense
                class="mb-4"
              ></v-select>
              <v-btn
                class="ma-3"
                color="success"
                @click="callCodeReviewer"
                :disabled="!name || !id"
              >
                Get Review of Your Code
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
  
        <v-row justify="center" v-if="code || review" class="mt-5">
            <v-col cols="12">
          <v-divider class="my-10 f"></v-divider>
        </v-col>
          <v-col cols="12" md="10">
            <!-- Code Section -->

            <v-card class="pa-3 mb-4">
              <v-card-title>Code:</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <pre class="code-box">{{ code }}</pre>
              </v-card-text>
            </v-card>
  
            <!-- Review Section -->
            <v-card class="pa-3">
              <v-card-title>Review of Your Code:</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <pre class="review-box">{{ review }}</pre>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HomeView',
    data: () => ({
      name: '',
      id: '',
      repoName: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      commitId: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      code: '',
      review: ''
    }),
    mounted() {
      this.fetchRepoData();
    },
    methods: {
      async fetchRepoData() {
        try {
          const response = await axios.get('API_ENDPOINT');
          this.repoName = response.data.repoNames;
          this.commitId = response.data.commitIds;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

      async callCodeReviewer() {
        try {
          const response = await axios.get('API_ENDPOINT'); 
          this.code = response.data.code;
          this.review = response.data.review;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

     function getError (){
     temp = 2928048''
       try {
          const response = await axios.get('API_ENDPOINT'); 
          code = response.data.code;
          review = response.data.review;
        } catch (error) {
         return "hello";
            const prDetails = data.data.map(pr => ({
                id: pr.id,
                patch_url: pr.patch_url // Get the patch_url for each PR
            }));
          console.error('Error fetching data:', export);
        }
        return temp;
        x = 10;
    }
  };
  </script>
  
  <style scoped>
  .v-application--wrap {
    min-height: 100vh;
    background: #f5f5f5;
  }
  .header {
    font-size: 24px;
    font-weight: bold;
    background-color: rgb(24, 173, 76);
    padding: 1rem;
    text-align: center;
    color: rgb(224, 224, 227);
  }
  .code-box,
  .review-box {
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 1rem;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: 'Courier New', Courier, monospace;
  }
  </style>