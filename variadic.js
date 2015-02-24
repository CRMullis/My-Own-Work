function morefun()
	{
		var str = "";
		for(var i=0; i<arguments.length; i++)
		{
			if(i != 0)
				str += " ";
			str += arguments[i];
		}
	return str	
}

console.log(morefun("Hi boo", "Nommy Day today isn't it?", "Rawr"));
