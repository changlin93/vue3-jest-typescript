import { mount } from '@vue/test-utils';
import Timeline from '@/components/Timeline.vue';
import { nextTick } from 'vue';

describe('Timeline.vue', () => {
	it('测试三个a标签的功能', () => {
		const wrapper = mount(Timeline);
		// expect(wrapper.html());

		// const periods = wrapper.findAll('a');
		// console.log(periods);
		// expect(periods.length).toBe(3);

		expect(wrapper.findAll('[data-test="period"]')).toHaveLength(3)
	});

	it('测试a标签的事件切换功能', async () => {
		const wrapper = mount(Timeline);
		const $today = wrapper.findAll('[data-test="period"]')[0];
		expect($today.classes()).toContain("is-active");

		const $week = wrapper.findAll('[data-test="period"]')[1];
		
		/**
		 * tips: 这儿会有一个dom更新的过程，若不使用await异步等待执行的话，后面的执行会在dom更新前执行，从而带来dom节点找不到的问题
		 */
		await $week.trigger('click');
		expect($today.classes()).not.toContain("is-active");
		expect($week.classes()).toContain("is-active");

		const $month = wrapper.findAll('[data-test="period"]')[2];
		await $month.trigger('click');

		expect($week.classes()).not.toContain('is-active');
		expect($month.classes()).toContain('is-active');
	});

})
