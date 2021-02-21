<template>
    <div class="title">我是分享页面</div>
</template>

<script>
import { airQuality } from "@/http/api.js";
export default {
    data() {
        return {

        };
    },
    created() {
        this.airQuality();
    },
    methods: {
        airQuality() {
            var data = {};
            airQuality(data).then((res) => {
                console.log(JSON.stringify(res));
            });
        }
    },
};
</script>

<style scoped>
.title {
    width: 10rem;
    font-size: 0.4rem;
}
</style>