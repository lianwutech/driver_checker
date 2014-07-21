from pyv8 import PyV8
import json


class Global(PyV8.JSClass):
    def log(self, level, msg):
        print "level %d: %s" % (level, msg)
ctxt = PyV8.JSContext(Global())
ctxt.enter()
driver = open('lib/dsl.js', 'r').read()
ctxt.eval(driver)
example = open('spec/example.js', 'r').read()
ctxt.eval(example)

ctxt.eval("var meta_data = JSON.stringify(driver.validate())")
meta_data = json.loads(ctxt.locals.meta_data)
print "meta data:"
print meta_data["fields"]
print "errors:"
print meta_data.get("errors")
print "actions:"
print meta_data["actions"]
print "states:"
print meta_data["states"]

print "init:"
devices_dict = {'343dsadfas': {'device_type': 'adsfas'}}
ctxt.eval("var devices_dict = %s" % json.dumps(devices_dict))
ctxt.eval("log(10, JSON.stringify(devices_dict));")

print "process_data:"
result = ctxt.eval("JSON.stringify(driver.process_data(\"A4B83290DE\"));")
print json.loads(result)

print "translate_action:"
result = ctxt.eval("driver.translate_action('move')")
print result

print "log:"
ctxt.eval("driver.action('test', 'test', function() { debug('debug msg') });")
ctxt.eval("JSON.stringify(driver.validate())")
result = ctxt.eval("driver.translate_action('test')")
