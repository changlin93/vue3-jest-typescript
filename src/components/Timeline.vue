<template>
	<nav class="is-primary panel">
		<p class="panel-tabs">
			<a 
				:class="[period===selectedPeriod?'is-active':'']"
				href="" 
				data-test="period" 
				v-for="(period, index) in periods" 
				:key="index"
				@click="setPeriod(period)"
			>{{period}}</a>
		</p>
	</nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {Period} from '../types/index'
export default defineComponent({
	name: 'Timeline',
	setup(){
		const periods: Period[] = ["今天", "本周", "本月"];

		const selectedPeriod = ref<Period>('今天');

		// tab 切换
		const setPeriod = (period: Period) => {
			selectedPeriod.value = period;
		}


		return {
			periods,
			selectedPeriod,
			setPeriod,
		}
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
