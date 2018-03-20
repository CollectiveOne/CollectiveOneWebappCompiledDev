package org.collectiveone.modules.governance;

import java.util.UUID;

import org.collectiveone.modules.assignations.Bill;
import org.springframework.data.repository.CrudRepository;

public interface DecisionRepositoryIf extends CrudRepository<Bill, UUID> {

}
