const text = `
    一天 ， 小明 和 他的 朋友 小华 去了 公园 。 天气 很 好 ， 太阳 很 大 。 小明 说 ： “ 今天 真 热 ， 我们 坐下来 吧 。 ” 他们 找到 一个 树下 的 地方 坐 下了 。 小华 看到 一只 小 狗 。 她 说 ： “ 看 ， 那只 小狗 真 可爱 ！ ” 小狗 跑 过来 ， 和 他们 玩 。 他们 玩得 很 高兴 。 小明 拿 出 水 和 两个 苹果 。 他 给 小华 一个 苹果 说 ： “ 这个 给 你 。 ” 小华 笑了 笑 说 ： “ 谢谢 你 ， 我 很 饿 了 。 ” 忽然 ， 他们 听到 音乐声 。 有人 在 唱歌 ， 跳舞 。 小明 和 小华 去 看 。 他们 也 开始 跳舞 。 太阳 开始 下山 了 。 小明 看了 看 表 说 ： “ 已经 六点 了 ， 我们 回家 吧 。 ” 小华 说 ： “ 好 的 ， 今天 很 开心 。 ” 他们 说 再见 ， 然后 回家 了 。
`;

// Split the text into sentences based on the punctuation followed by space
const hanziStory = text.trim().split(/ (?=[。！？])/).filter(sentence => sentence.trim() !== '');
