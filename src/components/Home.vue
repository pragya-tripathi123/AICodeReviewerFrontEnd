<template>
  <v-container fluid class="pa-0">
    <div class="header">
      <h2>AI Code Reviewer</h2>
    </div>

    <v-container class="mt-5">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-select
              v-model="name"
              :items="repoName"
              label="Select Your Repository"
              outlined
              dense
              class="mb-4"
              @change="updatePrIds"
            ></v-select>
            <v-select
              v-model="id"
              :items="filteredPrIds"
              label="Select your PR Id"
              outlined
              dense
              class="mb-4"
              :disabled="!filteredPrIds.length"
            ></v-select>
            <div v-if="!filteredPrIds.length && name" class="no-pr-message">
              No PRs available for this repository.
            </div>
            <v-btn
              class="ma-3"
              color="success"
              @click="callCodeReviewer"
              :disabled="!name || !id || loading"
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
            <v-card-text class="scrollable-card">
              <pre class="code-box">{{ code }}</pre>
            </v-card-text>
          </v-card>

          <!-- Review Section -->
          <v-card class="pa-3">
            <v-card-title>Review of Your Code:</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="scrollable-card">
              <pre class="review-box">{{ review }}</pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Loader Overlay -->
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="loading-overlay"
      ></v-progress-circular>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data: () => ({
    name: "",
    id: "",
    repoName: [],
    prIds: [],
    filteredPrIds: [], // New data property for filtered PR IDs
    code: "",
    review: "",
    loading: false,
  }),
  mounted() {
    this.fetchRepoData();
  },
  methods: {
    async fetchRepoData() {
      this.prIds = [];
      this.repoName = [];
      try {
        const response = await axios.get(
          "http://localhost:3015/api/v1/reviewrequest"
        );

        if (Array.isArray(response.data.data)) {
          this.repoName = response.data.data.map((item) => item.repoName);
          this.prIds = response.data.data.reduce((acc, item) => {
            acc[item.repoName] = item.prIds.map((prId) => prId.toString());
            return acc;
          }, {});
        } else {
          console.error("Expected an array in response.data.data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    updatePrIds() {
    console.log('this.name', this.name)
    console.log('this.prIds', this.prIds)
    console.log('this.filteredPrIds', this.filteredPrIds)
      this.filteredPrIds = this.prIds[this.name] || []; // Filter PR IDs based on selected repo
      this.id = ""; // Reset PR ID when repo changes
    },

    async callCodeReviewer() {
      this.code = "";
      this.review = "";
      this.loading = true;

      try {
        const response = await axios.get(
          `http://localhost:3015/api/v1/pragya-tripathi123/${this.name}/${this.id}/pulls`
        );
        this.code = response.data.data.response;
        this.review = response.data.data.allReviews;
        console.log('code', JSON.stringify(this.code, null, 4 ))
        console.log('review', JSON.stringify(this.review, null, 4))
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
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
  font-family: "Courier New", Courier, monospace;
}
.scrollable-card {
  max-height: 300px;
  overflow-y: auto;
}
.loading-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Ensure it appears above other content */
}
.no-pr-message {
  color: red;
  margin-top: 10px;
}
</style>
