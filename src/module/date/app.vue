<template>
	<div class="card">
		<h1>{{title}}</h1>
		<div>
			<calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :pane="2" :placeholder="placeholder" ></calendar>
		</div>
		
		<div>
			<calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :pane="2" :placeholder="placeholder" :special-days="_dateMap" :has-input="false" :on-day-click="onDayClick"></calendar>
			<p>{{date}}</p>
		</div>
	    
	    
	 </div>
</template>
<style scoped>
	.card{
		width: 600px;
		margin: 50px auto;
	}
	.card h1{
		text-align: center;
	}
	.card div{
		margin: 10px;
	}
</style>
<script>
import Calendar from './components/Calendar'
export default {
  data () {
    return {
      title: 'DatePicker',
      date: '',
      disabled: [],
      value: '2016-06-10',
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty',
      DATENAME: {
        'today': '今天',
        'yuandan': '元旦',
        'chuxi': '除夕',
        'chunjie': '春节',
        'yuanxiao': '元宵',
        'qingming': '清明',
        'wuyi': '劳动',
        'duanwu': '端午',
        'zhongqiu': '中秋',
        'guoqing': '国庆'
      },
      HOLIDAYS: {
        yuandan: ['2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01'],
        chuxi: ['2012-01-22', '2013-02-09', '2014-01-30', '2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
        chunjie: ['2012-01-23', '2013-02-10', '2014-01-31', '2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
        yuanxiao: ['2012-02-06', '2013-02-24', '2014-02-14', '2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
        qingming: ['2012-04-04', '2013-04-04', '2014-04-05', '2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
        wuyi: ['2012-05-01', '2013-05-01', '2014-05-01', '2015-05-01', '2016-05-01', '2017-05-01', '2018-05-01', '2019-05-01', '2020-05-01'],
        duanwu: ['2012-06-23', '2013-06-12', '2014-06-02', '2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
        zhongqiu: ['2012-09-30', '2013-09-19', '2014-09-08', '2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
        guoqing: ['2012-10-01', '2013-10-01', '2014-10-01', '2015-10-01', '2016-10-01', '2017-10-01', '2018-10-01', '2019-10-01', '2020-10-01']
      }
    }
  },
  components: {
    Calendar
  },
  computed: {
    _dateMap () {
      return this._createDateMap()
    }
  },
  methods: {
  	getDateInfo (v) {
      var iDiff = -1
      var sNowDate = this.stringify(new Date())
      var sDateName = ['今天', '明天', '后天']
      switch (true) {
        case v === sNowDate:
          iDiff = 0
          break
        case v === this.siblings(sNowDate, 1):
          iDiff = 1
          break
        case v === this.siblings(sNowDate, 2):
          iDiff = 2
          break
      }
      !this._dateMap && this.isHoliday && (this._dateMap = this._createDateMap())
      return this._dateMap && this._dateMap[v] || sDateName[iDiff]
    },
    onDayClick (date, str) {
      this.date = str
    },
  	_createDateMap () {
      var oTmp = {}
      for (var propety in this.HOLIDAYS) {
        var curHoliday = this.HOLIDAYS[propety]
        for (var i = 0; i < curHoliday.length; i++) {
          var sDate = curHoliday[i]
          var sName = this.DATENAME[propety]
          oTmp[sDate] = sName
        }
      }
      return oTmp
    },
  }
}
</script>