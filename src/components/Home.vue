<template>
    <div class="">
        <div class="header">
           <h1> Ai Code Reviewer </h1>
        </div>
        <div class="top">
            <v-select
            v-model="name"
            :items="repoName"
            label= "Outlined style"
            ></v-select>
            <v-select
            v-model="id"
            :items="commitId"
            label="Outlined style"
            ></v-select>
            <button class="btn">
                review
            </button>
        </div>
        <div class="bottom">
            <h2>Code :</h2>
            <div class="code">

                            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the 
            Where can I get some?
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

            5
                paragraphs
                words
                bytes
                lists
                Start with 'Lorem
            ipsum dolor sit amet...'

            </div>
            <h2>Review of Your Code:</h2>
            <div class="review">

            </div>
        </div>
    </div>
</template>

<script>
export default{
    name : 'HomeView',
    data: () => ({
      name : '',
      id : '',
      repoName: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      commitId: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style>
.header{
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(7, 153, 55);
    padding: 1rem;
    text-align: center;
}
.top{
    padding: 5rem;
    display: flex;
    gap:5rem;
    align-items: center;
}
.btn{
    background-color: rgb(7, 153, 55);
    /* margin: 0.5rem 0rem; */
    padding: 0.5rem 1rem;
    border: 1 px solid black;
    color: rgb(23, 23, 69);
}
.bottom{
    padding: 5rem;
}
.code, .review{
    border: 1px solid black;
    margin-bottom: 5rem;
    padding: 0.5rem;
}
</style>