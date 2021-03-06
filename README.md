component\_driver\_dsl
==============
The DSL for writing a component driver, see `spec/example.js` for details.

# Try PyV8 example
```sh
virtualenv venv
. venv/bin/activate
# for Max OS
pip install git+http://github.com/brokenseal/PyV8-OS-X#egg=pyv8
# for Linux
pip install -r requirements.txt
python PyV8-example.py
```

# Development
the DSL itself doesn't depend on 3rd library, but Node.JS is required to run tests.
```sh
npm install -g gulp
npm install
gulp test
```

# driver撰写指南
`action()`和`data\_fetcher()`有两种格式：

*  直接返回要发送到设备的原始数据

```
return "6F73C2";
```

*  对于绑定了多个设备的组件，返回一个数组，里面包含发送给每个device_id的消息。

```
return [ { device_id: "XX_YY_ZZ" , command: "6F73C2" },
{ device_id: "XX_YY_AA" , command: "6F73C2" } ]
```
