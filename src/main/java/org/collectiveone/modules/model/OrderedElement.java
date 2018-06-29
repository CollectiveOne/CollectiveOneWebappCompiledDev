package org.collectiveone.modules.model;

public interface OrderedElement {
	
	public OrderedElement getBeforeElement();

	public void setBeforeElement(OrderedElement beforeElement);

	public OrderedElement getAfterElement();

	public void setAfterElement(OrderedElement afterElement);
	
	public ModelScope getScope();
	
	public void setScope(ModelScope scope);
	
}
