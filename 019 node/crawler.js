const http = require('http');
const url = 'http://www.imooc.com/learn/348';
const cheerio = require('cheerio');
function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.learncharter');
	var courseData = [];
	chapters.each(item => {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};
		videos.each(item => {
			var video = $(this).find('.studyvideo');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		});
		courseData.push(chapterData);
	});
	return courseData
}
function printCourseInfo(courseData) {
	courseData.forEach(item => {
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle+'\n');
		item.videos.forEach(video => {
			console.log('【'+video.id+'】'+video.title+'\n');
		})
	})
}
http.get(url, res => {
	var html = '';
	res.on('data', data => {
		html+=data;
	});
	res.on('end',  () => {
		let courseData = filterChapters(html);
		printCourseInfo(courseData);
	})
}).on('error', function () {
	console.log('获取课程数据出错！');
});